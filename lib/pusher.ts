import PusherServer from 'pusher';
import PusherClient from 'pusher-js';

const pusherKey = process.env.NEXT_PUBLIC_PUSHER_KEY;
const pusherCluster = process.env.NEXT_PUBLIC_PUSHER_CLUSTER;

// Server-side Pusher
export const pusherServer = 
  process.env.PUSHER_APP_ID && pusherKey && process.env.PUSHER_SECRET && pusherCluster
    ? new PusherServer({
        appId: process.env.PUSHER_APP_ID,
        key: pusherKey,
        secret: process.env.PUSHER_SECRET,
        cluster: pusherCluster,
        useTLS: true,
      })
    : null;

// Client-side Pusher
export const pusherClient = 
  pusherKey && pusherCluster
    ? new PusherClient(pusherKey, { cluster: pusherCluster })
    : null;
