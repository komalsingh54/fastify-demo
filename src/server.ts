import { v4 } from 'uuid';
import fastify from 'fastify';
import cors from "fastify-cors";
import underPressure from 'under-pressure';
import helmet from 'fastify-helmet';
import { underPressureConfig } from './config/uunderPressureConfig';
const server = fastify({ logger: true, genReqId: (req: any) => req.headers['x-request-id'] || v4() });

server.register(cors);
server.register(helmet);
server.register(underPressure,  underPressureConfig());

server.register(require('./plugins/db-connector'));
server.register(require('./routes/first-route'));

const start = async () => {
  try {
    await server.listen(3000, '0.0.0.0');
  } catch (error) {
    server.log.error(error);
    // eslint-disable-next-line no-undef
    process.exit(1);
  }
};

start();