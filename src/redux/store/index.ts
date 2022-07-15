import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';

import rootReducer from '../reducers';

const middleware = [reduxThunk];


export const store:any = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export const persistor = persistStore(store);
