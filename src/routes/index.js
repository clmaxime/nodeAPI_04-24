import { Router } from "express";
import authRoutes from "./authRoutes.js";
import clothesRoutes from "./clothesRoutes.js";
import salesRoutes from "./salesRoutes.js";
import filesRoutes from "./filesRoutes.js";

const router = Router();

router.use("/auth", authRoutes);

router.use("/clothes", clothesRoutes);

router.use("/sales", salesRoutes)

router.use("/files", filesRoutes)

export default router;