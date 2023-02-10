"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processImage2 = exports.processImage = void 0;
const jimp_1 = __importDefault(require("jimp"));
async function processImage(base64Image) {
    const image = await jimp_1.default.read(Buffer.from(base64Image, "base64"));
    const processedImage = image.greyscale().contrast(1).normalize();
    return processedImage.getBufferAsync(jimp_1.default.MIME_PNG);
}
exports.processImage = processImage;
async function processImage2(imagePath) {
    try {
        let image = await jimp_1.default.read(imagePath);
        // Binarization
        image = image.threshold({ max: 128 });
        // Skew correction
        // const angle = Jimp.measureTextExposure(image);
        // image = image.rotate(angle);
        // Noise reduction
        //image = await image.median(5);
        // Resizing
        image = image.resize(512, 512, jimp_1.default.RESIZE_NEAREST_NEIGHBOR);
        return await image.getBufferAsync(jimp_1.default.MIME_JPEG);
    }
    catch (err) {
        console.error(err);
        throw err;
    }
}
exports.processImage2 = processImage2;
//# sourceMappingURL=process-image.js.map