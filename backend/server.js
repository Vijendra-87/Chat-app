import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import  cors  from "cors";

import authRoutes from "./routes/auth.routes.js"
import messagesRoutes from "./routes/messages.routes.js"
import userRoutes from "./routes/user.routes.js"

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

dotenv.config(); 


const PORT = process.env.PORT || 5050


app.use(cors());
app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());


app.use("/api/auth",authRoutes)
app.use("/api/messages",messagesRoutes)
app.use("/api/users",userRoutes)

app.get("/",(req,res)=>{
res.send("Hello World 1") 
});


server.listen(PORT,()=>{
    connectToMongoDB()
    console.log(`Server Running on Port ${PORT}`)
    console.log(`http://localhost:${PORT}`)
})