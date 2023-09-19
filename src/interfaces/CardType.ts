import { CardImagesType } from "./CardImagesType";

export interface CardType {
  code: string;
  image: string;
  images: CardImagesType;
  value: string;
  suit: string;
}