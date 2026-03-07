// const express = require("express")  // loading express libraries (commonJS -> package.json("type":"commonJS"))
import express from "express"   // express library (ES module -> package.json("type":"module"))

const app = express()   // creating an instance of express application




// server starts here
app.listen(5001, () => {
    console.log("server is running on 5001")
})