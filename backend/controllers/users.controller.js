import { User } from "../models/index.js";

export const listUsers = async (req, res) => {
  try {
    const limit = Number(req.query.limit ?? 20);
    const offset = Number(req.query.offset ?? 0);
    const users = await User.findAll({ limit, offset, order: [["user_id", "ASC"]] });
    res.json(users);
  } catch (e) { res.status(500).json({ error: e.message }); }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (e) { res.status(500).json({ error: e.message }); }
};

export const createUser = async (req, res) => {
  try {
    const { name, email, password_hash, avatar_url } = req.body;
    const user = await User.create({ name, email, password_hash, avatar_url });
    res.status(201).json(user);
  } catch (e) { res.status(400).json({ error: e.message }); }
};

export const updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    const { name, email, password_hash, avatar_url, points } = req.body;
    await user.update({ name, email, password_hash, avatar_url, points });
    res.json(user);
  } catch (e) { res.status(400).json({ error: e.message }); }
};

export const deleteUser = async (req, res) => {
  try {
    const deleted = await User.destroy({ where: { user_id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: "User not found" });
    res.json({ ok: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
};
