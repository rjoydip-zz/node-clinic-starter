"use strict";

const fastify = require('fastify');

const app = fastify({
    logger: false
});

app.get('/', async (req, res) => {
    return 'hello fastify'
});

// no issue
// app.listen(process.env.PORT || 3000);

(async () => {
    await app.listen(process.env.PORT || 3000);
})();