import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { incrementCashAction , decrementCashAction , defaultCashAction} from './Store/reducers/cashReducer';

function App() {
  const cash = useSelector((state) => state.cash.cash);
  const dispatch = useDispatch();
  console.log(cash);

  return (
    <div className='App'>
      <h1>{cash}</h1>

      <button onClick={() => dispatch(incrementCashAction(1))}>
        Increment
      </button>
      <button onClick={() => dispatch(decrementCashAction(1))}>
        Decrement
      </button>
      <button onClick={() => dispatch(defaultCashAction(1))}>Default</button>
    </div>
  );
}

export default App;
