# 📘 SmartBin – README

## 🚀 Descripción
**SmartBin** es una aplicación de innovación desarrollada durante hackatones para **promover el reciclaje, la conciencia ambiental y el impacto social**.  
La solución combina un **backend en Node.js + Express + Sequelize (PostgreSQL)** y un **frontend en Next.js (App Router)**.

### Funcionalidades principales
- Registro de **usuarios** con puntos acumulados.
- Registro de **acciones de reciclaje**.
- Asignación de **insignias (badges)** por logros ambientales.
- Donaciones a **ONGs aliadas** (ej. TECHO Colombia).
- Panel de estadísticas comunitarias para visualizar el impacto colectivo.
- Frontend con múltiples vistas (Home, Recycle, Impact, Techo, Profile).

---

## 🏗️ Arquitectura del proyecto
```

smartbin-project/
backend/            # API REST con Express/Sequelize
config/           # Configuración DB
controllers/      # Lógica de negocio
models/           # Modelos Sequelize
routes/           # Endpoints REST
seeds.js          # Script para poblar la BD
index.js          # Entry point del servidor

````

---

## ⚙️ Backend

### Tecnologías
- Node.js  
- Express  
- Sequelize ORM  
- PostgreSQL  
- dotenv (variables de entorno)  
- cors (CORS policy)  

### Scripts
En la carpeta `backend/`:
```bash
npm install     # instalar dependencias
npm start       # iniciar servidor (http://localhost:3000)
node seeds.js   # poblar la base de datos
````

### Endpoints principales

* `GET /api/users` → Lista de usuarios
* `POST /api/users` → Crear usuario
* `GET /api/recycling` → Acciones de reciclaje
* `GET /api/badges` → Insignias
* `GET /api/ngos` → ONGs registradas
* `GET /api/stats/community` → Estadísticas de impacto

---

## 🌱 Seed Data (ejemplo)

El archivo `seeds.js` inserta datos iniciales como:

* Usuarios de prueba (Ari Demo, Juan Pérez).
* Insignias (Eco Starter, Green Hero).
* ONG (TECHO Colombia).

Ejecutar:

```bash
node seeds.js
```

---

## 👩‍💻 Equipo y créditos

* Proyecto desarrollado como **prototipo de hackatón** en la Universidad de la Costa (CUC – Barranquilla).
* Integración de **tecnología, impacto social y sostenibilidad**.

```
