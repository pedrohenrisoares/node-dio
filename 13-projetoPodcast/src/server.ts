import * as http from "http";
import { log, rB, gB, bB } from "./utils/logs-chalk";
import { app } from "./app";

const server = http.createServer(app);

const port = process.env.PORT;

server.listen(port, () => {
  log(gB(`Server running on Port ${port}`));
});
