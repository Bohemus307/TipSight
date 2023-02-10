"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const opencv_js_1 = __importDefault(require("opencv.js"));
async function prepareImage(image) {
    console.log('so tired nowwwwww');
    return new Promise((resolve, reject) => {
        opencv_js_1.default.onRuntimeInitialized = () => {
            try {
                console.log('final try');
                const buf = new Uint8Array(image
                    .split("")
                    .map((c) => c.charCodeAt(0)));
                const mat = opencv_js_1.default.imdecode(buf);
                const gray = mat.bgrToGray();
                const adaptiveThreshold = gray.adaptiveThreshold(255, opencv_js_1.default.ADAPTIVE_THRESH_GAUSSIAN_C, opencv_js_1.default.THRESH_BINARY, 15, 5);
                resolve(adaptiveThreshold);
            }
            catch (error) {
                reject(error);
            }
        };
    });
}
exports.default = prepareImage;
//# sourceMappingURL=prepare-image.js.map