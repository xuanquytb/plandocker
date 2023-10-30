import { createSlice } from "@reduxjs/toolkit";

const CardSlice = createSlice({
  name: "card",
  initialState: {
    cards: [],
    sumMoneyCard: 0,
  },
  reducers: {
    getCard: () => ({}),
    getSumMoneyCard: () => ({}),
    deleteCardDetail: (state, actions) => ({
      ...state,
      cards: state.cards.filter((item) => item.id !== actions.payload),
    }),
    updateCardDetail: (state, actions) => ({
      ...state,
      cards: state.cards.map((item) => {
        if (item.id === actions.payload) {
          return {
            ...item,
            quantity: item?.quantity + 1,
          };
        }
        return item;
      }),
    }),
    setCard: (state, actions) => ({
      ...state,
      cards: actions.payload,
    }),
    setSumMoneyCard: (state, actions) => ({
      ...state,
      sumMoneyCard: actions.payload,
    }),
  },
});

export const {
  getCard,
  setCard,
  setSumMoneyCard,
  getSumMoneyCard,
  deleteCardDetail,
} = CardSlice.actions;

export default CardSlice.reducer;
