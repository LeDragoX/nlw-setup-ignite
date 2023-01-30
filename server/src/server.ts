import Fastify from 'fastify';
import cors from '@fastify/cors';
import { appRoutes } from './routes';

const app = Fastify();

app.register(cors);
app.register(appRoutes);

app.listen({
  host: '0.0.0.0', // 0.0.0.0 // localhost
  port: 3333,
}).then((url) => {
  console.log(`HTTP Server running on ${url}`);
});
