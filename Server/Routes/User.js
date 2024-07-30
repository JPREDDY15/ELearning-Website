import express from "express";
import { forgotPassword, loginUser, myProfile, register, resetPassword, verifyUser } from "../Controlers/User.js";
import { isAuth } from "../middleWare/isAuth.js";
import { addProgress, getYourProgress } from "../Controlers/course.js";
const router=express.Router();
router.post('/user/register',register);
router.post('/user/verify',verifyUser);
router.post('/user/login',loginUser);
router.get("/user/me", isAuth,myProfile);
router.post("/user/forgot", forgotPassword);
router.post("/user/reset", resetPassword);
router.post("/user/progress", isAuth, addProgress);
router.get("/user/progress", isAuth, getYourProgress);

export default router;  