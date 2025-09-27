import { Router } from "express";
import {
  listNgos,
  createNgo,
  getNgo,
  updateNgo,
  deleteNgo
} from "../controllers/ngo.controller.js";

const router = Router();

router.get("/", listNgos);
router.get("/:id", getNgo);
router.post("/", createNgo);
router.put("/:id", updateNgo);
router.delete("/:id", deleteNgo);

export default router;
