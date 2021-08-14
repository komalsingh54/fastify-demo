import schema from '../schema/animal.schema'

const firstRoute = async (fastify: any) => {
  const collection = fastify.mongo.db.collection('animal');

  fastify.get('/', async () => {
    return { 'hello': 'first router' };
  });

  fastify.post('/animal', schema, async (request: any, reply: any) => {
    const result = await collection.insert(request.body);
    return result;
  });

  fastify.get('/animals', async (request: any, reply: any) => {
    const result = await collection.find().toArray();
    if (!result.length) reply.status(404).send('No Document found');
    return result;
  });

  fastify.get('/animals/:animal', async (request: { params: { animal: string; }; }, reply: any) => {
    const result = await collection.findOne({ name: request.params.animal });
    if (!result) {
      reply.status(404).send('No Document found');
    }
    return result;
  });
};

export default firstRoute;
