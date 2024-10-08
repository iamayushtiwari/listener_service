const Redis = require('redis')
const redisClient = Redis.createClient({ url: 'redis://host.docker.internal:6379', })

redisConnect().catch(err => console.log(err));

async function redisConnect() {
    await redisClient.on('error', err => console.log('Redis Client Error', err))
        .connect();
    console.log('Redis Client connected')
}

module.exports = { redisClient }