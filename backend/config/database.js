import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const REQUIRED = ["DB_NAME", "DB_USER", "DB_PASS", "DB_HOST"];
for (const k of REQUIRED) {
  if (!process.env[k]) {
    throw new Error(`Missing env var ${k}. Check your .env`);
  }
}
if (typeof process.env.DB_PASS !== "string") {
  throw new Error("DB_PASS must be a string");
}

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS, // <- si era undefined provoca tu error
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    logging: false,
  }
);

export default sequelize;

