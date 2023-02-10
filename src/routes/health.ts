import { FastifyRequest, FastifyReply } from "fastify";

const health = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    return { message: "API is healthy" };
  } catch (err) {
    reply.code(500).send({ message: "Something went wrong" });
  }
};

export default health;
