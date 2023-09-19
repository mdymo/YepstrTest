import { fetchCard, fetchDeck } from '../reducers/deckOfCardsReducer';
import axios from 'axios';
import { AppDispatch, RootState } from '../store/store';

export const getDeck = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    dispatch(fetchDeck(response.data.deck_id));
  } catch (e) {
    console.error(e)
  }
}

export const getCard = (deckId: string) => async (dispatch: AppDispatch, getState: () => RootState) => {
  try {
    const state = getState();
    const response = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    const cards = state.cards;

    if(cards && cards.length === 1) {
      dispatch(fetchCard({
        cards: [...cards, ...response.data.cards],
        remaining: response.data.remaining,
        deck_id: response.data.deck_id,
        success: response.data.success
      }));
    } else if (cards && cards.length === 2) {
      const lastCardArray = cards.slice(1);
      dispatch(fetchCard({
        cards: [...lastCardArray, ...response.data.cards],
        remaining: response.data.remaining,
        deck_id: response.data.deck_id,
        success: response.data.success
      }))
    } else {
      dispatch(fetchCard(response.data))
    }
  } catch (e) {
    console.error(e)
  }
}


