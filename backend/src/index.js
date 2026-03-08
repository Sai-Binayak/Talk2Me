// const express = require("express")  // loading express libraries (commonJS -> package.json("type":"commonJS"))
import express from "express"   // express library (ES module -> package.json("type":"module"))
import authRoutes from "./routes/auth.routes.js"
import dotenv from "dotenv"
import {connectDB} from "./lib/db.lib.js"   // connection to mongodb

const app = express()   // creating an instance of express application

dotenv.config()         // getting all the paths from .env file
const PORT = process.env.PORT

app.use("/api/auth", authRoutes)   // adds middleware/route handlers to express app


// server starts here
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
    connectDB()
})