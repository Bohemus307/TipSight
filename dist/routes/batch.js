"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const process_image_1 = require("../services/process-image");
const tesseract_js_1 = __importDefault(require("tesseract.js"));
async function processCurrentImage(image) {
    // Use OpenCV or another image processing library to prepare the image for OCR
    // ...
    const processedImage = await (0, process_image_1.processImage)(image.toString('base64'));
    // Use Tesseract.js to extract text from the processed image
    const result = await tesseract_js_1.default.recognize(processedImage);
    return result.data;
}
const handleBatch = async (request, reply) => {
    const images = request.body.images;
    const processingPromises = images.map(async (image) => {
        try {
            const recognitionResult = await processCurrentImage(image);
            return {
                image,
                text: recognitionResult.text,
                confidence: recognitionResult.confidence,
            };
        }
        catch (error) {
            console.error(error);
            return { image, error: error.message };
        }
    });
    const results = await Promise.all(processingPromises);
    reply.send({ results });
};
exports.default = handleBatch;
//# sourceMappingURL=batch.js.map