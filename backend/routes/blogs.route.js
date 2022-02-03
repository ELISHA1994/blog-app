import express from "express";
import {time} from "../controllers/blogs.controller.js";


const router = express.Router();

router.get('/blogs', time);

export default router;
