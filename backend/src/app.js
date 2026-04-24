const express = require("express");
const pool = require("./db");

const app = express();
app.use(express.json());

app.get("/health", async (req, res) => {
  res.status(200).json({ status: "ok", version: "v3" });
});

app.get("/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW() as now");
    res.json({
      message: "Connexion DB OK",
      time: result.rows[0].now,
    });
  } catch (error) {
    res.status(500).json({
      error: "Erreur base de données",
      details: error.message,
    });
  }
});

module.exports = app;
