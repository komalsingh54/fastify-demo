import fastifyPlugin from 'fastify-plugin';

const { DB_HOST, DB_PORT, DB_NAME } = process.env;

const dbConnector = async (fastify: any) => {
  fastify.register(require('fastify-mongodb'), {
    url: `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`
  });
};

module.exports = fastifyPlugin(dbConnector);
