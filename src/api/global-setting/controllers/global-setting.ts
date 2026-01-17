/**
 * global-setting controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::global-setting.global-setting', ({ strapi }) => ({
    async findPopulated(ctx) {
        try {
            const globalSettings = await strapi.documents('api::global-setting.global-setting').findFirst({
                populate: {
                    // Logo and Favicon
                    logo: true,
                    favicon: true,

                    // Navigation Items
                    navigation_items: {
                        sort: 'order:asc'
                    },

                    // CTA Button
                    button: true,

                    // WhatsApp Link
                    whatsappLink: true,

                    // SEO Component
                    seo: {
                        populate: {
                            openGraph: {
                                populate: {
                                    ogImage: true
                                }
                            }
                        }
                    }
                }
            });

            if (!globalSettings) {
                return ctx.notFound('Global settings not found');
            }

            return {
                data: globalSettings,
                meta: {
                    populated: true,
                    timestamp: new Date().toISOString()
                }
            };
        } catch (error) {
            strapi.log.error('Error fetching populated global settings:', error);

            return ctx.badRequest('An error occurred while fetching global settings', {
                message: error.message,
                ...(process.env.NODE_ENV === 'development' && {
                    stack: error.stack
                })
            });
        }
    },

    // Manual fetch with separate query for navigation items
    async findSafe(ctx) {
        try {
            // First get the basic global settings
            const globalSettings = await strapi.documents('api::global-setting.global-setting').findFirst({
                populate: {
                    logo: true,
                    favicon: true,
                    button: true,
                    whatsappLink: true,
                    seo: {
                        populate: {
                            openGraph: {
                                populate: {
                                    ogImage: true
                                }
                            }
                        }
                    }
                }
            });

            if (!globalSettings) {
                return ctx.notFound('Global settings not found');
            }

            const enrichedData: any = { ...globalSettings };

            // Manually fetch navigation items if they exist
            if (enrichedData.navigation_items && enrichedData.navigation_items.length > 0) {
                const navItemIds = enrichedData.navigation_items.map((item: any) => item.documentId);

                const navigationItems = await strapi.documents('api::navigation-item.navigation-item').findMany({
                    filters: { documentId: { $in: navItemIds } },
                    sort: 'order:asc'
                });

                enrichedData.navigation_items = navigationItems;
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
                    contentType: 'api::global-setting.global-setting',
                });

            const globalSettings = await strapi.documents('api::global-setting.global-setting').findFirst({
                populate,
            });

            if (!globalSettings) {
                return ctx.notFound('Global settings not found');
            }

            return {
                data: globalSettings,
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
        const fields = ['logo', 'favicon', 'navigation_items', 'button', 'whatsappLink', 'seo'];

        for (const field of fields) {
            try {
                const test = await strapi.documents('api::global-setting.global-setting').findFirst({
                    populate: {
                        [field]: {
                            populate: '*'
                        }
                    }
                });
                results[field] = {
                    status: 'success',
                    hasData: !!test?.[field],
                    dataType: Array.isArray(test?.[field]) ? 'array' : typeof test?.[field]
                };
            } catch (err) {
                results[field] = {
                    status: 'failed',
                    error: err.message,
                    name: err.name
                };
            }
        }

        return { results };
    }
}));