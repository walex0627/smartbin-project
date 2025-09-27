import { Donation, User, NgoPartner } from "../models/index.js";

export const listDonations = async (req, res) => {
  try {
    const limit = Number(req.query.limit ?? 20);
    const offset = Number(req.query.offset ?? 0);
    const rows = await Donation.findAll({
      include: [
        { model: User, attributes: ["user_id", "name", "email"] },
        { model: NgoPartner, attributes: ["ngo_id", "name"] }
      ],
      limit, offset, order: [["donation_id", "DESC"]]
    });
    res.json(rows);
  } catch (e) { res.status(500).json({ error: e.message }); }
};

export const createDonation = async (req, res) => {
  try {
    const { user_id, ngo_id, amount } = req.body;
    const row = await Donation.create({ user_id, ngo_id, amount });
    res.status(201).json(row);
  } catch (e) { res.status(400).json({ error: e.message }); }
};

export const getDonation = async (req, res) => {
  try {
    const row = await Donation.findByPk(req.params.id);
    if (!row) return res.status(404).json({ error: "Donation not found" });
    res.json(row);
  } catch (e) { res.status(500).json({ error: e.message }); }
};

export const deleteDonation = async (req, res) => {
  try {
    const deleted = await Donation.destroy({ where: { donation_id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: "Donation not found" });
    res.json({ ok: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
};
