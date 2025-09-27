import sequelize from "../config/database.js";
import User from "./User.js";
import RecyclingAction from "./RecyclingAction.js";
import Badge from "./Badge.js";
import UserBadge from "./UserBadge.js";
import NgoPartner from "./NgoPartner.js";
import Donation from "./Donation.js";
import CommunityStat from "./CommunityStat.js";

// Asociaciones
User.hasMany(RecyclingAction, { foreignKey: "user_id" });
RecyclingAction.belongsTo(User, { foreignKey: "user_id" });

User.belongsToMany(Badge, { through: UserBadge, foreignKey: "user_id" });
Badge.belongsToMany(User, { through: UserBadge, foreignKey: "badge_id" });

User.hasMany(Donation, { foreignKey: "user_id" });
Donation.belongsTo(User, { foreignKey: "user_id" });

NgoPartner.hasMany(Donation, { foreignKey: "ngo_id" });
Donation.belongsTo(NgoPartner, { foreignKey: "ngo_id" });

// CommunityStat es “global”, sin FK obligatoria
export {
  sequelize,
  User,
  RecyclingAction,
  Badge,
  UserBadge,
  NgoPartner,
  Donation,
  CommunityStat
};
