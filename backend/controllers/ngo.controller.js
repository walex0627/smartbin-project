import { NgoPartner } from "../models/index.js";

export const listNgos = async (_req, res) => {
  try {
    const rows = await NgoPartner.findAll({ order: [["ngo_id", "ASC"]] });
    res.json(rows);
  } catch (e) { res.status(500).json({ error: e.message }); }
};

export const createNgo = async (req, res) => {
  try {
    const { name, description, website_url, logo_url } = req.body;
    const row = await NgoPartner.create({ name, description, website_url, logo_url });
    res.status(201).json(row);
  } catch (e) { res.status(400).json({ error: e.message }); }
};

export const getNgo = async (req, res) => {
  try {
    const row = await NgoPartner.findByPk(req.params.id);
    if (!row) return res.status(404).json({ error: "NGO not found" });
    res.json(row);
  } catch (e) { res.status(500).json({ error: e.message }); }
};

export const updateNgo = async (req, res) => {
  try {
    const ngo = await NgoPartner.findByPk(req.params.id);
    if (!ngo) return res.status(404).json({ error: "NGO not found" });
    const { name, description, website_url, logo_url } = req.body;
    await ngo.update({ name, description, website_url, logo_url });
    res.json(ngo);
  } catch (e) { res.status(400).json({ error: e.message }); }
};

export const deleteNgo = async (req, res) => {
  try {
    const deleted = await NgoPartner.destroy({ where: { ngo_id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: "NGO not found" });
    res.json({ ok: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
};
