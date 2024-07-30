import express from "express";
import { isAdmin, isAuth } from "../middleWare/isAuth.js";
import { addLectures, createCourse, deleteCourse, deleteLecture, getAllStats, getAllUser, updateRole } from "../Controlers/admin.js";
import { uploadFiles } from "../middleWare/multer.js";

const router = express.Router();

// Ensure uploadFiles middleware is placed before createCourse and addLectures
router.post("/course/new", isAuth, isAdmin, uploadFiles, createCourse);
router.post("/course/:id", isAuth, isAdmin, uploadFiles, addLectures);
router.delete("/course/:id", isAuth, isAdmin, deleteCourse);
router.delete("/lecture/:id", isAuth, isAdmin, deleteLecture);
router.get("/stats", isAuth, isAdmin, getAllStats);
router.put("/user/:id", isAuth, updateRole);
router.get("/users", isAuth, isAdmin, getAllUser);

export default router;
