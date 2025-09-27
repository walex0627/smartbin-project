import { Badge, User, UserBadge } from "../models/index.js";

export const listBadges = async (_req, res) => {
  try {
    const rows = await Badge.findAll({ order: [["badge_id", "ASC"]] });
    res.json(rows);
  } catch (e) { res.status(500).json({ error: e.message }); }
};

export const createBadge = async (req, res) => {
  try {
    const { name, description, icon_url } = req.body;
    const row = await Badge.create({ name, description, icon_url });
    res.status(201).json(row);
  } catch (e) { res.status(400).json({ error: e.message }); }
};

export const assignBadgeToUser = async (req, res) => {
  try {
    const { user_id, badge_id } = req.body;
    const row = await UserBadge.create({ user_id, badge_id });
    res.status(201).json(row);
  } catch (e) { res.status(400).json({ error: e.message }); }
};

export const listUserBadges = async (req, res) => {
  try {
    const userId = req.params.userId;
    const rows = await User.findByPk(userId, {
      include: [{ model: Badge, through: { attributes: [] } }]
    });
    if (!rows) return res.status(404).json({ error: "User not found" });
    res.json(rows);
  } catch (e) { res.status(500).json({ error: e.message }); }
};
