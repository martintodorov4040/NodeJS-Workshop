import { Router } from "express";
import songsController from "../controllers/songsController.js";

const router = Router();
router.post("/", songsController.getSong);
router.post("/", songsController.addNewSong);

export default router;
