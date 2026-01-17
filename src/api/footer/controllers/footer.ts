/**
 * footer controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::footer.footer', ({ strapi }) => ({
    async findPopulated(ctx) {
        try {
            const footer = await strapi.documents('api::footer.footer').findFirst({
                populate: {
                    // SEO Component
                    seo: {
                        populate: {
                            openGraph: true
                        }
                    },

                    // Footer Header Section
                    FooterHeader: {
                        populate: {
                            footerShowReel: true,
                            social_links: {
                                populate: {
                                    icon: true
                                }
                            }
                        }
                    },

                    // Footer Quick Links Section
                    FooterQuickLinks: {
                        populate: {
                            navigation_items: true
                        }
                    },

                    // Footer Link Groups (Expand Section)
                    FooterLinkGroups: {
                        populate: {
                            button: true,
                            linkGroups: {
                                populate: {
                                    footer_links: true
                                }
                            }
                        }
                    },

                    // Footer Base Section
                    FooterBase: {
                        populate: {
                            links: true,
                            footerLogoSmall: true,
                            footerLogoLarge: true
                        }
                    }
                }
            });

            if (!footer) {
                return ctx.notFound('Footer not found');
            }

            return {
                data: footer,
                meta: {
                    populated: true,
                    timestamp: new Date().toISOString()
                }
            };
        } catch (error) {
            strapi.log.error('Error fetching populated footer:', error);

            return ctx.badRequest('An error occurred while fetching the footer', {
                message: error.message,
                ...(process.env.NODE_ENV === 'development' && {
                    stack: error.stack
                })
            });
        }
    },

    // Manual fetch with separate queries for relations
    async findSafe(ctx) {
        try {
            // First get the basic footer
            const footer = await strapi.documents('api::footer.footer').findFirst({
                populate: {
                    seo: { populate: '*' },
                    FooterHeader: true,
                    FooterQuickLinks: true,
                    FooterLinkGroups: { populate: { button: true, linkGroups: true } },
                    FooterBase: { populate: '*' }
                }
            });

            if (!footer) {
                return ctx.notFound('Footer not found');
            }

            const enrichedData = { ...footer };

            // Manually fetch social links if they exist
            if (footer.FooterHeader?.social_links && footer.FooterHeader.social_links.length > 0) {
                const socialLinkIds = footer.FooterHeader.social_links.map((link: any) => link.documentId);

                const socialLinks = await strapi.documents('api::social-link.social-link').findMany({
                    filters: { documentId: { $in: socialLinkIds } },
                    populate: {
                        icon: true
                    }
                });

                enrichedData.FooterHeader.social_links = socialLinks;
            }

            // Manually fetch navigation items if they exist
            if (footer.FooterQuickLinks?.navigation_items && footer.FooterQuickLinks.navigation_items.length > 0) {
                const navItemIds = footer.FooterQuickLinks.navigation_items.map((item: any) => item.documentId);

                const navigationItems = await strapi.documents('api::navigation-item.navigation-item').findMany({
                    filters: { documentId: { $in: navItemIds } }
                });

                enrichedData.FooterQuickLinks.navigation_items = navigationItems;
            }

            // Manually fetch footer links for each link group
            if (footer.FooterLinkGroups?.linkGroups && footer.FooterLinkGroups.linkGroups.length > 0) {
                for (let i = 0; i < footer.FooterLinkGroups.linkGroups.length; i++) {
                    const group = footer.FooterLinkGroups.linkGroups[i];

                    if (group.footer_links && group.footer_links.length > 0) {
                        const footerLinkIds = group.footer_links.map((link: any) => link.documentId);

                        const footerLinks = await strapi.documents('api::footer-link.footer-link').findMany({
                            filters: { documentId: { $in: footerLinkIds } }
                        });

                        enrichedData.FooterLinkGroups.linkGroups[i].footer_links = footerLinks;
                    }
                }
            }

            return {
                data: enrichedData,
                meta: {
                    method: 'safe-manual',
                    populated: true,
                    timestamp: new Date().toISOString()
                }
            };
        } catch (error) {
            strapi.log.error('Error in safe fetch:', error);
            return ctx.badRequest(error.message);
        }
    },

    // Using deep-populate plugin (if installed)
    async findDeepPopulated(ctx) {
        try {
            const populate = await strapi.plugin("deep-populate")
                .service("populate")
                .get({
                    contentType: 'api::footer.footer',
                });

            const footer = await strapi.documents('api::footer.footer').findFirst({
                populate,
            });

            if (!footer) {
                return ctx.notFound('Footer not found');
            }

            return {
                data: footer,
                meta: {
                    method: 'deep-populate-plugin',
                    populated: true,
                    timestamp: new Date().toISOString()
                }
            };
        } catch (error) {
            strapi.log.error('Error with deep-populate plugin:', error);
            return ctx.badRequest('Deep populate failed: ' + error.message);
        }
    },

    // Debug endpoint
    async debugComponents(ctx) {
        const results = {};
        const components = ['seo', 'FooterHeader', 'FooterQuickLinks', 'FooterLinkGroups', 'FooterBase'];

        for (const component of components) {
            try {
                const test = await strapi.documents('api::footer.footer').findFirst({
                    populate: {
                        [component]: {
                            populate: '*'
                        }
                    }
                });
                results[component] = {
                    status: 'success',
                    hasData: !!test?.[component],
                    dataType: typeof test?.[component]
                };
            } catch (err) {
                results[component] = {
                    status: 'failed',
                    error: err.message,
                    name: err.name
                };
            }
        }

        return { results };
    }
}));