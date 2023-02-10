"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testImageArray = exports.testImage2 = exports.testImage1 = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const imageToBuffer = async (relativePath, name) => {
    try {
        const image = fs_1.default.readFileSync(path_1.default.resolve(__dirname, relativePath));
        console.log("IMAGE !!!!!!!!!!!!!!!!!!", image);
        const encodedImage = Buffer.from(image).toString("base64");
        console.log('IMAGE to BUFFER', encodedImage);
        fs_1.default.writeFileSync(name, encodedImage);
    }
    catch (error) {
        throw new Error(`Error in image to buffer function: ${error}`);
    }
};
const testImage1 = async () => {
    const image = await imageToBuffer("../../static/image/test-image-1.jpg", "image1.txt");
    return image;
};
exports.testImage1 = testImage1;
const testImage2 = async () => {
    const image = await imageToBuffer("../../static/image/test-image-2.jpg", "image2.txt");
    return image;
};
exports.testImage2 = testImage2;
(0, exports.testImage1)();
(0, exports.testImage2)();
exports.testImageArray = [exports.testImage1, exports.testImage2];
exports.default = imageToBuffer;
//# sourceMappingURL=image-to-buffer.js.map