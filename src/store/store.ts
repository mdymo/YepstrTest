import { configureStore } from "@reduxjs/toolkit";
import deckOfCardsReducer from "../reducers/deckOfCardsReducer";

const store = configureStore({
  reducer: deckOfCardsReducer
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;