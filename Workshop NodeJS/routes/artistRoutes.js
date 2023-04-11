import { Router } from "express";
import artistController from "../controllers/artistController.js";

const router = Router();

router.get("/", artistController.getArtist);
router.post("/", artistController.addnewArtist);

export default router;
