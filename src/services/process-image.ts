import Jimp from "jimp";

export async function processImage(base64Image: string): Promise<Buffer> {
  const image = await Jimp.read(Buffer.from(base64Image, "base64"));
  const processedImage = image.greyscale().contrast(1).normalize();
  return processedImage.getBufferAsync(Jimp.MIME_PNG);
}

export async function processImage2(imagePath: string): Promise<Buffer> {
  try {
    let image = await Jimp.read(imagePath);

    // Binarization
    image = image.threshold({max: 128});

    // Skew correction
    // const angle = Jimp.measureTextExposure(image);
    // image = image.rotate(angle);

    // Noise reduction
    //image = await image.median(5);

    // Resizing
    image = image.resize(512, 512, Jimp.RESIZE_NEAREST_NEIGHBOR);

    return await image.getBufferAsync(Jimp.MIME_JPEG);
  } catch (err) {
    console.error(err);
    throw err;
  }
}

