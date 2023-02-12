import fastify, { FastifyInstance } from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";

import health from "./routes/health";
import single from "./routes/single"
import batch from "./routes/batch"

const app: FastifyInstance<Server, IncomingMessage, ServerResponse> =
  fastify({
    logger: true,
  });

app.get("/", health);

app.post("/single", single)
app.post("/batch", batch);

const start = async () => {
  try {
    await app.listen({ port: 3030 });
    app.log.info(`Server listening on http://localhost:3030`);
  } catch (err) {
    console.error(err)
    app.log.error(err);
    process.exit(1);
  }
};

start();

export default app;