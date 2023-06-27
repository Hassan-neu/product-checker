import PusherServer from "pusher";
import PusherClient from "pusher-js";

export const pusherServer = new PusherServer({
    appId: "1626151",
    key: "34a085d2822e9e1bd224",
    secret: "bcc7750c6cb2c22343c6",
    cluster: "eu",
    useTLS: true,
});

export const pusherClient = new PusherClient("34a085d2822e9e1bd224", {
    cluster: "eu",
});
