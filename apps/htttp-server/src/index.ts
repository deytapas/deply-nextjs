// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import "dotenv/config";
import { prisma } from "@repo/db/client"
import express from "express";

const app = express();
app.use(express.json())

app.post("/", async (req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    const response = await prisma.user.create({
        data: {
            username: username,
            password: password
        }
    })

    

    res.json({
        message: "data saved",
        id: response.id
    })
})

app.listen(3001);
