import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/root';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({
  // Specify custom devTools options
});

const store = preloadedState =>
  createStore(
    reducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunk))
  );

export default store;
