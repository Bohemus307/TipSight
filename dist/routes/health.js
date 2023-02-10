"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const health = async (request, reply) => {
    try {
        return { message: "API is healthy" };
    }
    catch (err) {
        reply.code(500).send({ message: "Something went wrong" });
    }
};
exports.default = health;
//# sourceMappingURL=health.js.map