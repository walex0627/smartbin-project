import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const UserBadge = sequelize.define("UserBadge", {
  user_id: { type: DataTypes.INTEGER, primaryKey: true },
  badge_id: { type: DataTypes.INTEGER, primaryKey: true },
  earned_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
  tableName: "user_badges",
  timestamps: false
});

export default UserBadge;
