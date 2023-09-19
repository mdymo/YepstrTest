import { CardType } from "./CardType";

export interface GetDeckOfCardsResponse {
  success: boolean;
  deck_id: string;
  cards: CardType[];
  remaining: number;
}