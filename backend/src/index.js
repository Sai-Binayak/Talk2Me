// const express = require("express")  // loading express libraries (commonJS -> package.json("type":"commonJS"))
import express from "express"   // express library (ES module -> package.json("type":"module"))
import authRoutes from "./routes/auth.routes.js"

const app = express()   // creating an instance of express application

app.use("/api/auth", authRoutes)   // adds middleware/route handlers to express app


// server starts here
app.listen(5001, () => {
    console.log("server is running on 5001")
})