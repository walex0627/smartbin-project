import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Badge = sequelize.define("Badge", {
  badge_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING(100), allowNull: false },
  description: { type: DataTypes.TEXT },
  icon_url: { type: DataTypes.TEXT }
}, {
  tableName: "badges",
  timestamps: true
});

export default Badge;
