export default {
    routes: [
        {
            method: 'GET',
            path: '/servicepage/populated',
            handler: 'api::servicepage.servicepage.findPopulated',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/servicepage/deep-populated',
            handler: 'api::servicepage.servicepage.findDeepPopulated',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/servicepage/safe',
            handler: 'api::servicepage.servicepage.findSafe',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/servicepage/debug',
            handler: 'api::servicepage.servicepage.debugComponents',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
    ],
};