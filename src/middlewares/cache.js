// Redis cache middleware

const redisClient = require('../config/redis');

const CACHE_TTL = 60; // seconds

function cache(req, res, next) {
    const key = `cache:${req.originalUrl}`;

    redisClient.get(key)
        .then((cached) => {
            if (cached) {
                return res.status(200).json(JSON.parse(cached));
            }

            // Override res.json to cache the response before sending
            const originalJson = res.json.bind(res);
            res.json = (body) => {
                redisClient.setEx(key, CACHE_TTL, JSON.stringify(body)).catch((err) =>
                    console.error('Redis cache write error:', err)
                );
                return originalJson(body);
            };

            next();
        })
        .catch((err) => {
            console.error('Redis cache read error:', err);
            next();
        });
}

module.exports = cache;
