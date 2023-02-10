export interface ImageResult {
  image: Buffer;
  text?: string;
  error?: string;
}

export interface RecognitionResult {
  text: string;
  confidence: number;
}

export interface ImageData {
  image?: Buffer;
  error?: any;
  processedImage?: undefined;
  buffer?: Buffer;
}

export interface ImageDataLike extends ImageData {
  data: Uint8ClampedArray;
  width: number;
  height: number;
  colorSpace: PredefinedColorSpace;
}

export type ImageLike =
  | ImageData
  | HTMLImageElement
  | HTMLCanvasElement
  | HTMLVideoElement;