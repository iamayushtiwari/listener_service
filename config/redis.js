const Redis = require('redis');

const redisClient = Redis.createClient({
    url: 'redis://host.docker.internal:6379',
  })

// Handle Redis connection errors
redisClient.on('error', (err) => {
  console.log('Redis Client Error:', err);
});

// Connect to Redis
async function redisConnect() {
  try {
    await redisClient.connect();
    console.log('Redis Client connected');
  } catch (err) {
    console.error('Error connecting to Redis:', err);
  }
}

// Call the connect function
redisConnect();

module.exports = { redisClient };
