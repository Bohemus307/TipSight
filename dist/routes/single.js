"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const process_image_1 = require("../services/process-image");
const tesseract_js_1 = __importDefault(require("tesseract.js"));
// import { ImageDataLike } from "../lib/interfaces/global";
const single = async (request, reply) => {
    try {
        const image = request.body.image.toString("base64");
        if (!image) {
            return reply.code(400).send({ message: "Image not provided" });
        }
        // processes image
        const processedImage = await (0, process_image_1.processImage)(image);
        // gets text data from image
        const { text } = (await tesseract_js_1.default.recognize(processedImage)).data;
        return reply.send({ text });
    }
    catch (error) {
        return reply.code(500).send({ message: error.message });
    }
};
exports.default = single;
//# sourceMappingURL=single.js.map