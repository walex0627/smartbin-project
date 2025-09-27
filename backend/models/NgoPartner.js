import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const NgoPartner = sequelize.define("NgoPartner", {
  ngo_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING(150), allowNull: false },
  description: { type: DataTypes.TEXT },
  website_url: { type: DataTypes.TEXT },
  logo_url: { type: DataTypes.TEXT }
}, {
  tableName: "ngo_partners",
  timestamps: true
});

export default NgoPartner;
