import express from "express";
import config from "config";

const app = express();

// JSON middleware
app.use(express.json());

// DB
import db from "../config/db";

// Routes
import router from "./router";

app.use("/api/", router);

// app port
const port = config.get<number>("port");

app.listen(3000, async () => {
  await db();

  console.log(`Aplicação está funcionando na porta: ${port}`);
});
