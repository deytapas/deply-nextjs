import "dotenv/config";
import { WebSocketServer } from "ws";
import { prisma } from "@repo/db/client"

const ws = new WebSocketServer({
    port: 9090
})

ws.on("connection" , async (socket) => {
    const response = await prisma.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })

    socket.send("hi There, You are connected to the ws server");
})