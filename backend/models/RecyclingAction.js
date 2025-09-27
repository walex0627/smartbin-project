import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const RecyclingAction = sequelize.define("RecyclingAction", {
  action_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  user_id: { type: DataTypes.INTEGER, allowNull: false },
  waste_type: { type: DataTypes.STRING(50), allowNull: false }, // plástico, vidrio, etc.
  weight: { type: DataTypes.DECIMAL(10,2), allowNull: true },
  points_earned: { type: DataTypes.INTEGER, allowNull: true }
}, {
  tableName: "recycling_actions",
  timestamps: true
});

export default RecyclingAction;
