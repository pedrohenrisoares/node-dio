import { log, rB, gB, bB } from "./utils/logs-chalks";
import createApp from "./app";

const app = createApp();
const port = process.env.PORT;

app.listen(port, () => {
  log(gB(`Server running on: http://localhost:${port}`));
});
