import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {postReducer} from './posts/postReducer';
import {uiReducer} from './ui/uiReducer';

// Root Reducer
const rootReducer = combineReducers({
  postReducer,
  uiReducer,
});

/**
 * Store configuration
 */
export const configureStore = () => {
  const middleware = [];
  middleware.push(thunkMiddleware);

  if (__DEV__) {
    const loggerMiddleware = createLogger({collapsed: true});
    middleware.push(loggerMiddleware);
  }

  const composer = compose(applyMiddleware(...middleware));

  const store = createStore(rootReducer, {}, composer);

  return store;
};

// Redux store type
export type AppState = ReturnType<typeof rootReducer>;
