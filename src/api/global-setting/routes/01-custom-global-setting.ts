// src/api/global-setting/routes/01-custom-global-setting.ts

export default {
    routes: [
        {
            method: 'GET',
            path: '/global-setting/populated',
            handler: 'api::global-setting.global-setting.findPopulated',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/global-setting/safe',
            handler: 'api::global-setting.global-setting.findSafe',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/global-setting/deep-populated',
            handler: 'api::global-setting.global-setting.findDeepPopulated',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/global-setting/debug',
            handler: 'api::global-setting.global-setting.debugComponents',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
    ],
};