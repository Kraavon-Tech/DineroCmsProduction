/**
 * about-page controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::aboutpage.aboutpage', ({ strapi }) => ({
    async findPopulated(ctx) {
        try {
            const aboutPage = await strapi.documents('api::aboutpage.aboutpage').findFirst({
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

                    // Global Impact Section
                    globalImpact: {
                        populate: {
                            stats: true,
                            backgroundImage: true
                        }
                    },

                    // Story Section
                    story: {
                        populate: {
                            leftHighlight: {
                                populate: {
                                    icon: true
                                }
                            },
                            rightHighlight: {
                                populate: {
                                    icon: true
                                }
                            },
                            milestones: true
                        }
                    },

                    // Founder Section
                    founder: {
                        populate: {
                            photo: true
                        }
                    },

                    // Culture Section
                    culture: {
                        populate: {
                            image: true
                        }
                    },

                    // Bottom Hero (reused from services)
                    bottomHero: {
                        populate: {
                            backgroundImage: true,
                            primaryButton: true,
                            secondaryButton: true
                        }
                    }
                }
            });

            if (!aboutPage) {
                return ctx.notFound('About page not found');
            }

            return {
                data: aboutPage,
                meta: {
                    populated: true,
                    timestamp: new Date().toISOString()
                }
            };
        } catch (error) {
            strapi.log.error('Error fetching populated about page:', error);

            return ctx.badRequest('An error occurred while fetching the about page', {
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
                    contentType: 'api::aboutpage.aboutpage',
                });

            const aboutPage = await strapi.documents('api::aboutpage.aboutpage').findFirst({
                populate,
            });

            if (!aboutPage) {
                return ctx.notFound('About page not found');
            }

            return {
                data: aboutPage,
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
        const components = ['seo', 'hero', 'globalImpact', 'story', 'founder', 'culture', 'bottomHero'];

        for (const component of components) {
            try {
                const test = await strapi.documents('api::aboutpage.aboutpage').findFirst({
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