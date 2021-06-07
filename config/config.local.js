const middlewares = require('./default/array-of-middlewares');

module.exports = {
  middlewares,
  server: {
    port: Number(process.env.NODE_CONFIG_SERVER_PORT)
  },
  api: {
    name: process.env.NODE_CONFIG_API_NAME || 'base-api',
    version: process.env.NODE_CONFIG_API_VERSION || 'v1',
    blacklistMask: process.env.NODE_CONFIG_API_BLACKLIST_MASK || 'password,document'
  },
  database: {
    driver: process.env.DATABASE_DRIVER || 'mongodb',
    mongodb: {
      host: process.env.MONGODB_HOST || 'mongodb://localhost:27017',
      databaseName: process.env.MONGODB_DATABASE_NAME || 'project'
    },
    redis: {
      host: process.env.REDIS_HOST || '127.0.0.1',
      port: Number(process.env.REDIS_PORT) || 6379,
      password: process.env.REDIS_PASSWORD || 'sOmE_sEcUrE_pAsS',
      ttl: Number(process.env.REDIS_TTL) || 86400,
    }
  }
};
