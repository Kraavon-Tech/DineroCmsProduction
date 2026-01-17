// src/api/footer/routes/01-custom-footer.ts

export default {
    routes: [
        {
            method: 'GET',
            path: '/footer/populated',
            handler: 'api::footer.footer.findPopulated',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/footer/safe',
            handler: 'api::footer.footer.findSafe',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/footer/deep-populated',
            handler: 'api::footer.footer.findDeepPopulated',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/footer/debug',
            handler: 'api::footer.footer.debugComponents',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
    ],
};