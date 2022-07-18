export const cashReducer = (state = { cash: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, cash: state.cash + action.payload };
    case 'DECREMENT':
      return { ...state, cash: state.cash - action.payload };
    case 'DEFAULT':
      return { ...state, cash: (state = 0) };
    default:
      return state;
  }
};

export const incrementCashAction = (payload) => ({
  type: 'INCREMENT',
  payload,
});
export const decrementCashAction = (payload) => ({
  type: 'DECREMENT',
  payload,
});
export const defaultCashAction = (payload) => ({ type: 'DEFAULT', payload });
