export default ({ env }) => ({
    // Deep Populate Plugin Configuration
    'deep-populate': {
        enabled: true,
        config: {
            useCache: false, // Disable cache for debugging
            replaceWildcard: true,
        }
    },

    // Add your other plugin configurations below
    // Example:
    // email: {
    //   config: {
    //     provider: 'sendgrid',
    //     providerOptions: {
    //       apiKey: env('SENDGRID_API_KEY'),
    //     },
    //     settings: {
    //       defaultFrom: env('EMAIL_DEFAULT_FROM'),
    //       defaultReplyTo: env('EMAIL_DEFAULT_REPLY_TO'),
    //     },
    //   },
    // },
});