// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import "dotenv/config";
import { prisma } from "@repo/db/client"
import express from "express";

const app = express();

app.get("/", async (req, res) => {
    const response = await prisma.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })

    res.json({
        message: "data saved",
        id: response.id
    })
})

app.listen(3001);