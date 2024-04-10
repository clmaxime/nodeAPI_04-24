import { Router } from "express";

import authRoutes from "./authRoutes.js";
import clothesRoutes from "./clothesRoutes.js";

const router = Router();

router.use("/auth", authRoutes);

router.use("/clothes", clothesRoutes);

export default router;