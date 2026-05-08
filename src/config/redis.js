// Redis client configuration

const { createClient } = require('redis');

const redisConfig = {
    socket: {
        host: process.env.REDIS_HOST || 'redis',
        port: parseInt(process.env.REDIS_PORT) || 6379,
        reconnectStrategy: (retries) => Math.min(retries * 500, 5000)
    }
};

if (process.env.REDIS_PASSWORD) {
    redisConfig.password = process.env.REDIS_PASSWORD;
}

if (process.env.REDIS_USER && process.env.REDIS_USER !== 'default') {
    redisConfig.username = process.env.REDIS_USER;
}

const redisClient = createClient(redisConfig);

redisClient.on('error', (err) => console.error('Redis Client Error:', err));
redisClient.on('connect', () => console.log('Redis connected'));

redisClient.connect().catch((err) => console.error('Redis initial connection failed:', err));

module.exports = redisClient;
