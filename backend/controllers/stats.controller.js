import { CommunityStat, RecyclingAction } from "../models/index.js";
import { fn, col } from "sequelize";

export const getCommunityStats = async (_req, res) => {
  try {
    // Si tienes tabla CommunityStat, devuélvela. Si no, calcula on-the-fly.
    const stat = await CommunityStat.findOne({ order: [["updatedAt", "DESC"]] });
    if (stat) return res.json(stat);

    const agg = await RecyclingAction.findAll({
      attributes: [
        [fn("COALESCE", fn("SUM", col("weight")), 0), "total_weight"],
        [fn("COALESCE", fn("SUM", col("points_earned")), 0), "total_points"]
      ]
    });
    res.json(agg[0]);
  } catch (e) { res.status(500).json({ error: e.message }); }
};
