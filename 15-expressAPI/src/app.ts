import express, { json } from "express";
import cors from "cors";
import router from "./routes";

function createApp() {
  const app = express();
  app.use(json());

  /*
  const corsOptions = {
    origin: "http://localhost:3333",
    methods: ["GET", "POST", "PATCH", "DELETE"],
  };
  */

  app.use(cors());
  app.use("/api", router);
  return app;
}

export default createApp;
