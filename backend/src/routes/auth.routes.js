import express from "express"
import { login, logout, signup } from "../controllers/auth.controllers.js"

const router = express.Router()     // instance of router

router.post("/signup", signup)

router.post("/login", login)

router.post("/logout", logout)

export default router






// all the logics are in controllers, to simplify routes