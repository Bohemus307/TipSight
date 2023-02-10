import { FastifyRequest, FastifyReply } from "fastify";
import {processImage} from "../services/process-image";
import tess from "tesseract.js";
// import { ImageDataLike } from "../lib/interfaces/global";

const single = async (
  request: FastifyRequest<{ Body: { image: Buffer } }>,
  reply: FastifyReply
): Promise<void> => {
  try {
    const image = request.body.image.toString("base64");
    if (!image) {
      return reply.code(400).send({ message: "Image not provided" });
    }
    // processes image
    const processedImage = await processImage(image);
    // gets text data from image
    const { text } = (await tess.recognize(processedImage)).data;

    return reply.send({ text });
  } catch (error: any) {
    return reply.code(500).send({ message: error.message });
  }
};

export default single;
