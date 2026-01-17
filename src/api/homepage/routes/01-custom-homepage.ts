/**
 * Custom routes for homepage
 * File: src/api/homepage/routes/01-custom-homepage.ts
 */

export default {
    routes: [
        {
            method: 'GET',
            path: '/homepage/populated',
            handler: 'api::homepage.homepage.findPopulated',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};