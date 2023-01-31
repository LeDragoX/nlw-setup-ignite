import Fastify from 'fastify';
import cors from '@fastify/cors';

import { appRoutes } from './routes';
import { notificationRoutes } from './notifications-routes';

const HOST = '0.0.0.0';
const PORT = 3333;
const app = Fastify();

app.register(cors);
app.register(appRoutes);
app.register(notificationRoutes);

app.listen({
  host: HOST, // 0.0.0.0 // localhost
  port: PORT,
}).then((url) => {
  console.log(`HTTP Server running on ${url}`);
});
