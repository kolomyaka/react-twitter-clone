export const corsOpts = {
    origin: 'http://localhost:3000',

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