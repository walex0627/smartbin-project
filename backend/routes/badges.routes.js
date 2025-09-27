import { Router } from "express";
import {
  listBadges,
  createBadge,
  assignBadgeToUser,
  listUserBadges
} from "../controllers/badges.controller.js";

const router = Router();

router.get("/", listBadges);
router.post("/", createBadge);

// asignar insignia a usuario
router.post("/assign", assignBadgeToUser);

// listar insignias de un usuario
router.get("/user/:userId", listUserBadges);

export default router;
