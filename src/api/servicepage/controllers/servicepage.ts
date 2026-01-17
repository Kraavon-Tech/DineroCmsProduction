/**
 * servicepage controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::servicepage.servicepage', ({ strapi }) => ({
    async findPopulated(ctx) {
        try {
            const servicePage = await strapi.documents('api::servicepage.servicepage').findFirst({
                populate: {
                    // SEO Component
                    seo: {
                        populate: {
                            openGraph: true
                        }
                    },

                    // Hero Section
                    hero: {
                        populate: {
                            primaryButton: true,
                            secondaryButton: true,
                            backgroundImage: true
                        }
                    },

                    // Impact Stats Section
                    impactStats: {
                        populate: {
                            impactStats: {
                                populate: {
                                    icon: true
                                }
                            }
                        }
                    },

                    // Service Categories (with nested services and highlights)
                    categories: {
                        populate: {
                            services: {
                                populate: {
                                    icon: true,
                                    seo: {
                                        populate: {
                                            openGraph: true
                                        }
                                    }
                                }
                            },
                            highlights: {
                                populate: {
                                    icon: true
                                }
                            }
                        }
                    },

                    // Final/Bottom Hero
                    finalHero: {
                        populate: {
                            backgroundImage: true,
                            primaryButton: true,
                            secondaryButton: true
                        }
                    }
                }
            });

            if (!servicePage) {
                return ctx.notFound('Service page not found');
            }

            return {
                data: servicePage,
                meta: {
                    populated: true,
                    timestamp: new Date().toISOString()
                }
            };
        } catch (error) {
            strapi.log.error('Error fetching populated service page:', error);

            return ctx.badRequest('An error occurred while fetching the service page', {
                message: error.message,
                ...(process.env.NODE_ENV === 'development' && {
                    stack: error.stack
                })
            });
        }
    },

    // Using deep-populate plugin (if installed)
    async findDeepPopulated(ctx) {
        try {
            const populate = await strapi.plugin("deep-populate")
                .service("populate")
                .get({
                    contentType: 'api::servicepage.servicepage',
                });

            const servicePage = await strapi.documents('api::servicepage.servicepage').findFirst({
                populate,
            });

            if (!servicePage) {
                return ctx.notFound('Service page not found');
            }

            return {
                data: servicePage,
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

    // Safe manual fetch (if deep populate causes issues)
    async findSafe(ctx) {
        try {
            // First get the basic service page
            const servicePage = await strapi.documents('api::servicepage.servicepage').findFirst({
                populate: {
                    seo: { populate: '*' },
                    hero: { populate: '*' },
                    impactStats: { populate: { impactStats: { populate: '*' } } },
                    categories: true,
                    finalHero: { populate: '*' }
                }
            });

            if (!servicePage) {
                return ctx.notFound('Service page not found');
            }

            const enrichedData = { ...servicePage };

            // Manually fetch services for each category
            if (servicePage.categories && servicePage.categories.length > 0) {
                for (let i = 0; i < servicePage.categories.length; i++) {
                    const category = servicePage.categories[i];

                    if (category.services && category.services.length > 0) {
                        const serviceIds = category.services.map((s: any) => s.documentId);

                        const services = await strapi.documents('api::service.service').findMany({
                            filters: { documentId: { $in: serviceIds } },
                            populate: {
                                icon: true,
                                seo: {
                                    populate: {
                                        openGraph: true
                                    }
                                }
                            },
                            sort: 'order:asc'
                        });

                        enrichedData.categories[i].services = services;
                    }

                    // Populate highlights
                    if (category.highlights && category.highlights.length > 0) {
                        // Highlights are components, already populated
                        enrichedData.categories[i].highlights = category.highlights;
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

    // Debug endpoint
    async debugComponents(ctx) {
        const results = {};
        const components = ['seo', 'hero', 'impactStats', 'categories', 'finalHero'];

        for (const component of components) {
            try {
                const test = await strapi.documents('api::servicepage.servicepage').findFirst({
                    populate: {
                        [component]: {
                            populate: '*'
                        }
                    }
                });
                results[component] = {
                    status: 'success',
                    hasData: !!test?.[component],
                    dataType: Array.isArray(test?.[component]) ? 'array' : typeof test?.[component]
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
