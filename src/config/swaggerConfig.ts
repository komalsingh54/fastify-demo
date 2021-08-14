export const swaggerConfig = () => {
  return {
    routePrefix: '/documentation',
    swagger: {
      info: {
        title: 'Fastify Swagger',
        description: 'A full blown APIs with Fastify',
        version: '1.0.0'
      },
      consumes: ['application/json'],
      produces: ['application/json'],
      host: 'localhost',
      schemes: ['http'],
    },uiConfig: {
      docExpansion: 'full',
      deepLinking: false
    },
    staticCSP: true,
    transformStaticCSP: (header: any) => header,
    exposeRoute: true
  };
};