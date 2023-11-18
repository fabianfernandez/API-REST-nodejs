import express from "express";
import morgan from "morgan";
import cors from "cors";
import { configDotenv } from "dotenv";
import router from "./router/lenguages.js";

configDotenv();

const port = process.env.PORT;

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use("/api", router);

app.listen(port, () => {
  console.log(`Servidor corriendo ${port}`);
});
