import { Router } from "express";
import artistsRouter from "./routes/artistRoutes.js";
import songsRouter from "./routes/songosRouter.js";

const router = Router();

router.use("/artists", artistsRouter);
router.use("/songs", songsRouter);
export default router;
