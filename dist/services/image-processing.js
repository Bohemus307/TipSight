"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const process_image_1 = __importDefault(require("./process-image"));
async function processImage(images) {
    if (Array.isArray(images)) {
        // Handle batch of images
        const processingPromises = images.map(async (image) => {
            try {
                // Use OpenCV or another image processing library to prepare the image
                // ...
                const processedImage = await (0, process_image_1.default)(image.toString("utf-8"));
                return { image, processedImage };
            }
            catch (error) {
                console.error(error);
                return { image, error: error.message };
            }
        });
        return Promise.all(processingPromises);
    }
    else {
        // Handle single image
        try {
            console.log('SINGLE IS RUNNNING');
            // Use OpenCV or another image processing library to prepare the image
            const processedImage = await (0, process_image_1.default)(images.toString("utf-8"));
            return { image: images, processedImage };
        }
        catch (error) {
            console.error(error);
            return { image: images, error: error.message };
        }
    }
}
exports.default = processImage;
//# sourceMappingURL=image-processing.js.map