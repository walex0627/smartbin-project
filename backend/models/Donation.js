import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Donation = sequelize.define("Donation", {
  donation_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  user_id: { type: DataTypes.INTEGER, allowNull: true },
  ngo_id: { type: DataTypes.INTEGER, allowNull: false },
  amount: { type: DataTypes.DECIMAL(10,2), allowNull: false }
}, {
  tableName: "donations",
  timestamps: true
});

export default Donation;
