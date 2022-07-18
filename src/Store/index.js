import { createStore, applyMiddleware, combineReducers } from 'redux';
import { cashReducer } from './reducers/cashReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducers = combineReducers({
  cash: cashReducer,
});

export const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
