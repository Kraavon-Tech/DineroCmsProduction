// src/api/aboutpage/routes/01-custom-aboutpage.ts

export default {
    routes: [
        {
            method: 'GET',
            path: '/about-us/populated',
            handler: 'api::aboutpage.aboutpage.findPopulated',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/about-us/deep-populated',
            handler: 'api::aboutpage.aboutpage.findDeepPopulated',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/about-us/debug',
            handler: 'api::aboutpage.aboutpage.debugComponents',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
    ],
};