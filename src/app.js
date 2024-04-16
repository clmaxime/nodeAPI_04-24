import express from "express";
import { handleUncaughtErrors } from "./Middlewares/error.js";
import routes from "./routes/index.js";
import swaggerUi from "swagger-ui-express";
import specs from "./swaggerConfig.js";

export function CreateApp() {
  const app = express();

  app.use(express.json());

  app.use(routes);

  app.use("/doc", swaggerUi.serve, swaggerUi.setup(specs));

  app.use(handleUncaughtErrors);
  return app;
}
