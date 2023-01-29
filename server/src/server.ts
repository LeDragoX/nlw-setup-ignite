import Fastify from 'fastify';
import cors from '@fastify/cors';
import { appRoutes } from './routes';

const DOMAIN = 'http://0.0.0.0';
const PORT = 3333;
const app = Fastify();

app.register(cors);
app.register(appRoutes);

app.listen({
  port: PORT,
}).then(() => {
  console.log(`HTTP Server running on ${DOMAIN}:${PORT}`);
});
