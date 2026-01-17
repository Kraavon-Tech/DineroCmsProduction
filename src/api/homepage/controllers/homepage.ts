/**
 * homepage controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::homepage.homepage', ({ strapi }) => ({
    // Keep all default methods intact
    ...factories.createCoreController('api::homepage.homepage'),

    // New custom endpoint for fully populated homepage
    async findPopulated(ctx) {
        try {
            // Method 1: Try using deep-populate plugin
            try {
                const populate = await strapi.plugin("deep-populate")
                    .service("populate")
                    .get({
                        contentType: 'api::homepage.homepage',
                    });

                const homepage = await strapi.documents('api::homepage.homepage').findFirst({
                    populate,
                });

                if (!homepage) {
                    return ctx.notFound('Homepage not found');
                }

                return {
                    data: homepage,
                    meta: {
                        method: 'deep-populate',
                        populated: true,
                        timestamp: new Date().toISOString()
                    }
                };
            } catch (deepPopulateError) {
                // If deep-populate fails, fall back to wildcard populate
                strapi.log.warn('Deep-populate failed, using fallback method:', deepPopulateError.message);

                const homepage = await strapi.documents('api::homepage.homepage').findFirst({
                    populate: '*',
                });

                if (!homepage) {
                    return ctx.notFound('Homepage not found');
                }

                return {
                    data: homepage,
                    meta: {
                        method: 'fallback',
                        populated: true,
                        timestamp: new Date().toISOString(),
                        note: 'Using fallback populate method'
                    }
                };
            }
        } catch (error) {
            strapi.log.error('Error fetching populated homepage:', error);
            return ctx.internalServerError('An error occurred while fetching the homepage');
        }
    }
}));