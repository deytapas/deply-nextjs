// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import "dotenv/config";
import { prisma } from "@repo/db/client"
import express from "express";

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    res.send({
        message: "Welcome to Http Server"
    })
})

app.post("/sign", async (req, res) => {
    console.log("DB URL:", process.env.DATABASE_URL);
    
    try {
        const user = await prisma.user.create({
            data: {
                username: "Cohot-3-room-5-prod",
                password: "djgbjkg"
            }
        });

        console.log(user);
    } catch (e: any) {
        console.error("ERROR OBJECT:", e);
        console.error("ERROR CODE:", e.code);
        console.error("ERROR META:", e.meta);
        res.json({
            meaasge: "error"
        })
    }
})

app.listen(3001);
