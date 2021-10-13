export interface IReview {
  title: string;
  author: string;
  taste: number;
  texture: number;
  visualPresentation: number;
  img: string;
  id: number;
  text: string;
}

export enum SliderType {
  Taste = 1,
  Texture,
  VisualPresentation,
}
