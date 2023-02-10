import fs from "fs";
import path from "path";

const imageToBuffer = async(relativePath: string, name: string) => {
  try {
    
    const image = fs.readFileSync(
      path.resolve(__dirname, relativePath)
    );
    console.log("IMAGE !!!!!!!!!!!!!!!!!!", image);
    const encodedImage = Buffer.from(image).toString("base64");
    console.log('IMAGE to BUFFER', encodedImage)
    fs.writeFileSync(name, encodedImage);
    
  } catch (error: any) {
    throw new Error(`Error in image to buffer function: ${error}`)
  }
}

export const testImage1 = async () => {
  const image = await imageToBuffer("../../static/image/test-image-1.jpg", "image1.txt");
  return image;
}
export const testImage2 = async () => {
  const image = await imageToBuffer("../../static/image/test-image-2.jpg", "image2.txt");
  return image
};

testImage1()
testImage2()
export const testImageArray = [testImage1, testImage2];

export default imageToBuffer;
