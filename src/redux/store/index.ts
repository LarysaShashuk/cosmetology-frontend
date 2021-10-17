import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from '../reducers';

const middlerawes = [reduxThunk];


const store:any = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlerawes)));

export default store;
