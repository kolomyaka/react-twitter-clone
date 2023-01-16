export const corsOpts = {
    origin: '*',

    methods: [
        'GET',
        'POST',
        'DELETE',
        'PATCH'
    ],

    allowedHeaders: [
        'Content-Type',
        'token'
    ],
};