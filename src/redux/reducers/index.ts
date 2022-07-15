import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import blogReducer from './blogReducer';
import authReducer from './authReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["auth", "blog"],
};

const rootReducer = combineReducers({
  blog: blogReducer,
  auth: authReducer,
});

export default persistReducer(persistConfig, rootReducer);
