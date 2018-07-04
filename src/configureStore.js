import { createStore, applyMiddleware, compose } from 'redux';
import bandsintownApp from './reducers';
import thunk from 'redux-thunk';


const configureStore = () => {
  const middlewares = [thunk];

  return createStore(
    bandsintownApp,
    compose(
      applyMiddleware(...middlewares),
      typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
        ? window.devToolsExtension()
        : f => f
    )
  );
};

export default configureStore;
