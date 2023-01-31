import WebPush from 'web-push';
import { FastifyInstance } from 'fastify';
import { z } from 'zod';

const DOMAIN = 'http://localhost:3333';
const publicKey = 'BP0J8082RXJkf3ZRMQn6BJ0f34AL4Dvr8JutazLTaysWceLdDJo0dCQmbyisWVxmKJIEkojF9tKTPU3lLKZwKCo';
const privateKey = 'z5PEcYsDYVjfhOkt6AcnU8B-df39a9Xey6B621U3eBM';

WebPush.setVapidDetails(DOMAIN, publicKey, privateKey);

export async function notificationRoutes(app: FastifyInstance) {
  app.get('/push/public_key', () => {
    return {
      publicKey
    };
  });

  await app.post('/push/register', (request, reply) => {
    console.log(request.body);

    return reply.status(201).send();
  });

  app.post('/push/send', (request, reply) => {
    const sendPushBody = z.object({
      subscription: z.object({
        endpoint: z.string(),
        keys: z.object({
          p256dh: z.string(),
          auth: z.string()
        })
      })
    });

    const { subscription } = sendPushBody.parse(request.body);

    setTimeout(() => {
      WebPush.sendNotification(subscription, 'HELLO DO BACKEND');
    }, 5000);

    return reply.status(201).send();
  });
}
