import { Router } from 'express';
import todoRoutes from './todo';
const router = Router();

// Book routes
router.use("/todo", todoRoutes);

export default router;
