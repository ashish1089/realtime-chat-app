import Pusher from "pusher";
import Pusherjs from "pusher-js";

export const pusherServer = new Pusher({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
  secret: process.env.PUSHER_APP_SECRET!,
  cluster: "ap2",
  useTLS: true,
});

export const pusherCient = new Pusherjs(process.env.NEXT_PUBLIC_PUSHER_APP_KEY! , {
  cluster: "ap2",
});
