import { Router } from "express";
import {
  listRecycling,
  getRecycling,
  createRecycling,
  updateRecycling,
  deleteRecycling
} from "../controllers/recycling.controller.js";

const router = Router();

router.get("/", listRecycling);
router.get("/:id", getRecycling);
router.post("/", createRecycling);
router.put("/:id", updateRecycling);
router.delete("/:id", deleteRecycling);

export default router;
