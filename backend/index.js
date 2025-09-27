// backend/index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sequelize } from "./models/index.js";

// Rutas
import userRoutes from "./routes/users.routes.js";
import recyclingRoutes from "./routes/recycling.routes.js";
import donationRoutes from "./routes/donations.routes.js";
import badgeRoutes from "./routes/badges.routes.js";
import ngoRoutes from "./routes/ngo.routes.js";
import statsRoutes from "./routes/stats.routes.js";

dotenv.config();

const app = express();

// Middlewares base
app.use(cors());
app.use(express.json({ limit: "1mb" }));

// Healthcheck
app.get("/health", (_req, res) => res.json({ ok: true }));

// Montaje de rutas
app.use("/api/users", userRoutes);
app.use("/api/recycling", recyclingRoutes);
app.use("/api/donations", donationRoutes);
app.use("/api/badges", badgeRoutes);
app.use("/api/ngos", ngoRoutes);
app.use("/api/stats", statsRoutes);

// 404 handler para rutas no encontradas
app.use((req, res, _next) => {
  res.status(404).json({ error: `Route not found: ${req.method} ${req.originalUrl}` });
});

// Error handler simple
app.use((err, _req, res, _next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "Internal server error" });
});

const PORT = process.env.PORT || 3000;
let server;

try {
  // Conexión y sincronización de modelos
  await sequelize.authenticate();
  await sequelize.sync({ alter: true }); // cambia a false en prod
  console.log("✅ DB connected & models synced");

  // Levantar servidor
  server = app.listen(PORT, () =>
    console.log(`🚀 Server running at http://localhost:${PORT}`)
  );
} catch (err) {
  console.error("❌ DB connection error:", err.message);
  process.exit(1);
}

// Cierre ordenado
const gracefulShutdown = async (signal) => {
  try {
    console.log(`\n${signal} received. Shutting down...`);
    if (server) {
      await new Promise((resolve) => server.close(resolve));
      console.log("🛑 HTTP server closed");
    }
    await sequelize.close();
    console.log("🔌 DB connection closed");
    process.exit(0);
  } catch (e) {
    console.error("Error during shutdown:", e);
    process.exit(1);
  }
};

process.on("SIGINT", () => gracefulShutdown("SIGINT"));
process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
