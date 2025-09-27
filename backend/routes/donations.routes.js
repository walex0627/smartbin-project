import { Router } from "express";
import {
  listDonations,
  createDonation,
  getDonation,
  deleteDonation
} from "../controllers/donations.controller.js";

const router = Router();

router.get("/", listDonations);
router.get("/:id", getDonation);
router.post("/", createDonation);
router.delete("/:id", deleteDonation);

export default router;
