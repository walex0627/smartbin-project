import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const User = sequelize.define("User", {
  user_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING(100), allowNull: false },
  email: { type: DataTypes.STRING(120), allowNull: false, unique: true },
  password_hash: { type: DataTypes.STRING(255), allowNull: false },
  avatar_url: { type: DataTypes.TEXT, allowNull: true },
  points: { type: DataTypes.INTEGER, defaultValue: 0 }
}, {
  tableName: "users",
  timestamps: true
});

export default User;
