// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import "dotenv/config";
import { prisma } from "@repo/db/client"
import express from "express";

const app = express();
app.use(express.json())

app.post("/", async (req, res) => {

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
    }
})

app.listen(3001);
