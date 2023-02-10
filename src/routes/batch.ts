import { ImageDataLike } from "../lib/interfaces/global";
import { processImage } from "../services/process-image";
import { FastifyReply, FastifyRequest } from "fastify";
import Tesseract from "tesseract.js";

interface RecognitionResult {
  text: string;
  confidence: number;
}

async function processCurrentImage(image: Buffer): Promise<RecognitionResult> {
  // Use OpenCV or another image processing library to prepare the image for OCR
  // ...
  const processedImage = await processImage(image.toString('base64'));
  // Use Tesseract.js to extract text from the processed image
  const result = await Tesseract.recognize(
    processedImage as unknown as ImageDataLike
  );

  return result.data;
}

const handleBatch = async (
  request: FastifyRequest<{ Body: { images: Buffer[] } }>,
  reply: FastifyReply
): Promise<void> => {
  const images = request.body.images;
  const processingPromises = images.map(async (image) => {
    try {
      const recognitionResult = await processCurrentImage(image);
      return {
        image,
        text: recognitionResult.text,
        confidence: recognitionResult.confidence,
      };
    } catch (error: any) {
      console.error(error);
      return { image, error: error.message };
    }
  });

  const results = await Promise.all(processingPromises);
  reply.send({ results });
};

export default handleBatch;

