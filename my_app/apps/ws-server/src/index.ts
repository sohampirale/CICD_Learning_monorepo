import { WebSocketServer } from "ws";
// import {client} from "@repo/db/client"
import { client } from "@repo/db/client";

const server = new WebSocketServer({
    port:3001
})

server.on("connection",async(socket)=>{
    socket.send("Hi there you are connected over WS")

    await client.User.create({
        data:{
            username:Math.random().toString(),
            password:"Random1234"
        }
    })
})