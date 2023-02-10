"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const health_1 = __importDefault(require("./routes/health"));
const single_1 = __importDefault(require("./routes/single"));
const batch_1 = __importDefault(require("./routes/batch"));
const app = (0, fastify_1.default)({
    logger: true,
});
app.get("/", health_1.default);
app.post("/single", single_1.default);
app.post("/batch", batch_1.default);
const start = async () => {
    try {
        if (process.env.NODE_ENV !== 'test') {
            await app.listen({ port: 3030 });
        }
        app.log.info(`Server listening on http://localhost:3030`);
    }
    catch (err) {
        console.error(err);
        app.log.error(err);
        process.exit(1);
    }
};
start();
exports.default = app;
//# sourceMappingURL=index.js.map