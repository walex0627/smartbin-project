import { RecyclingAction, User } from "../models/index.js";

export const listRecycling = async (req, res) => {
  try {
    const limit = Number(req.query.limit ?? 20);
    const offset = Number(req.query.offset ?? 0);
    const rows = await RecyclingAction.findAll({
      include: [{ model: User, attributes: ["user_id", "name", "email"] }],
      limit, offset, order: [["action_id", "DESC"]]
    });
    res.json(rows);
  } catch (e) { res.status(500).json({ error: e.message }); }
};

export const getRecycling = async (req, res) => {
  try {
    const row = await RecyclingAction.findByPk(req.params.id);
    if (!row) return res.status(404).json({ error: "Action not found" });
    res.json(row);
  } catch (e) { res.status(500).json({ error: e.message }); }
};

export const createRecycling = async (req, res) => {
  try {
    const { user_id, waste_type, weight, points_earned } = req.body;
    const row = await RecyclingAction.create({ user_id, waste_type, weight, points_earned });
    res.status(201).json(row);
  } catch (e) { res.status(400).json({ error: e.message }); }
};

export const updateRecycling = async (req, res) => {
  try {
    const row = await RecyclingAction.findByPk(req.params.id);
    if (!row) return res.status(404).json({ error: "Action not found" });
    const { waste_type, weight, points_earned } = req.body;
    await row.update({ waste_type, weight, points_earned });
    res.json(row);
  } catch (e) { res.status(400).json({ error: e.message }); }
};

export const deleteRecycling = async (req, res) => {
  try {
    const deleted = await RecyclingAction.destroy({ where: { action_id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: "Action not found" });
    res.json({ ok: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
};
