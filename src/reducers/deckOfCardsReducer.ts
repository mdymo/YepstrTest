import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CardType } from "../interfaces/CardType";
import { GetDeckOfCardsResponse } from "../interfaces/GetDeckOfCardsResponse";


export interface DeckOfCardsReducer {
  deckId: string;
  remainingCards: number;
  cards: CardType[] | null;
};

const initialState: DeckOfCardsReducer = {
  deckId: '',
  remainingCards: 0,
  cards: null
};

export const deckOfCardsSlice = createSlice({
  name: 'deckOfCards',
  initialState,
  reducers: {
    fetchDeck: (
      state: DeckOfCardsReducer,
      action: PayloadAction<string>
    ) => {
      state.deckId = action.payload;
    },
    fetchCard: (
      state: DeckOfCardsReducer,
      action: PayloadAction<GetDeckOfCardsResponse>
    ) => {
      state.cards = action.payload.cards;
      state.remainingCards = action.payload.remaining;
    }
  }
});

export const {
  fetchDeck,
  fetchCard
} = deckOfCardsSlice.actions;

export default deckOfCardsSlice.reducer;