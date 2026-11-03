import express from "express";
import { setAvailability, cancelAppointments, updateAvailability } from "../controllers/proff.js";
import { authMiddleware, profMiddleware } from "../middleware/auth.js";

const router = express.Router();

// Professor adds a free slot
router.post("/availability", authMiddleware, profMiddleware, setAvailability);

// Professor updates an existing FREE slot in place (new API)
router.put("/availability/:slotId", authMiddleware, profMiddleware, updateAvailability);

// Professor cancels appointments with a student
router.patch("/cancel-appointments/:studentId", authMiddleware, profMiddleware, cancelAppointments);

export default router;