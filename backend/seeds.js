import {
  sequelize,
  User,
  Badge,
  UserBadge,
  NgoPartner,
  Donation,
  RecyclingAction,
  CommunityStat,
} from "./models/index.js";

const seed = async () => {
  try {
    // ⚠️ Solo la primera vez puedes usar force:true para recrear
    await sequelize.sync({ alter: true });

    // Verificar si ya hay usuarios
    const existingUsers = await User.count();
    if (existingUsers > 0) {
      console.log("ℹ️ Seed abortado: ya existen registros en la BD");
      return process.exit(0);
    }

    // Usuarios
    const users = await User.bulkCreate([
      { name: "Ari Demo", email: "ari@cuc.edu.co", password_hash: "hash123", avatar_url: "https://i.pravatar.cc/150?img=1", points: 50 },
      { name: "Juan Pérez", email: "juan@cuc.edu.co", password_hash: "hash456", avatar_url: "https://i.pravatar.cc/150?img=2", points: 120 },
      { name: "Laura Gómez", email: "laura@cuc.edu.co", password_hash: "hash789", avatar_url: "https://i.pravatar.cc/150?img=3", points: 200 },
    ]);

    // Badges
    const badges = await Badge.bulkCreate([
      { name: "Eco Starter", description: "Primer aporte al reciclaje", icon_url: "https://img.icons8.com/color/48/leaf.png" },
      { name: "Green Hero", description: "Más de 100kg reciclados", icon_url: "https://img.icons8.com/color/48/recycle.png" },
    ]);

    // Relación usuarios ↔ badges
    await UserBadge.bulkCreate([
      { user_id: users[0].user_id, badge_id: badges[0].badge_id },
      { user_id: users[1].user_id, badge_id: badges[1].badge_id },
    ]);

    // ONGs
    const ngos = await NgoPartner.bulkCreate([
      { name: "TECHO Colombia", description: "Construcción de viviendas dignas", website_url: "https://techo.org/co/", logo_url: "https://upload.wikimedia.org/wikipedia/commons/7/73/Logo_TECHO.png" },
      { name: "Fundación Verde", description: "Sostenibilidad ambiental en el Caribe", website_url: "https://fundacionverde.org", logo_url: "https://img.icons8.com/color/48/earth-planet.png" },
    ]);

    // Donaciones
    await Donation.bulkCreate([
      { user_id: users[0].user_id, ngo_id: ngos[0].ngo_id, amount: 25.5 },
      { user_id: users[1].user_id, ngo_id: ngos[0].ngo_id, amount: 10.0 },
      { user_id: users[2].user_id, ngo_id: ngos[1].ngo_id, amount: 15.0 },
    ]);

    // Acciones de reciclaje
    await RecyclingAction.bulkCreate([
      { user_id: users[0].user_id, waste_type: "Plástico", weight: 2.5, points_earned: 25 },
      { user_id: users[0].user_id, waste_type: "Vidrio", weight: 1.0, points_earned: 10 },
      { user_id: users[1].user_id, waste_type: "Orgánico", weight: 3.0, points_earned: 30 },
      { user_id: users[2].user_id, waste_type: "Papel", weight: 5.0, points_earned: 50 },
    ]);

    // Stats iniciales
    await CommunityStat.create({ total_weight: 11.5, total_points: 115 });

    // Logs de verificación
    const [uc, bc, nc, dc, rc] = await Promise.all([
      User.count(), Badge.count(), NgoPartner.count(), Donation.count(), RecyclingAction.count()
    ]);

    console.log("✅ Seed completado con éxito:");
    console.log({ users: uc, badges: bc, ngos: nc, donations: dc, recycling: rc });

    process.exit(0);
  } catch (error) {
    console.error("❌ Error en el seed:", error);
    process.exit(1);
  }
};

seed();
