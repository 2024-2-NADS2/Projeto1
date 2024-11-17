// app.js
const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/database");
const Paciente = require("./models/Paciente");
const Medico = require("./models/Medico");
const Consulta = require("./models/Consulta");

const pacienteRoutes = require("./routes/pacienteRoutes");
const medicoRoutes = require("./routes/medicoRoutes");
const consultaRoutes = require("./routes/consultaRoutes");

const app = express();
app.use(bodyParser.json());

app.use("/pacientes", pacienteRoutes);
app.use("/medicos", medicoRoutes);
app.use("/consultas", consultaRoutes);

sequelize.sync().then(() => {
  console.log("Banco de dados sincronizado");
  app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
  });
});
