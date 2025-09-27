import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const CommunityStat = sequelize.define("CommunityStat", {
  stat_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  total_weight: { type: DataTypes.DECIMAL(12,2), defaultValue: 0 },
  total_points: { type: DataTypes.INTEGER, defaultValue: 0 }
}, {
  tableName: "community_stats",
  timestamps: true
});

export default CommunityStat;
