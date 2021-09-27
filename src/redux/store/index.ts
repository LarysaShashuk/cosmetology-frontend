import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import rootReducer from '../reducers';

const middlerawes = [reduxThunk];


const store:any = createStore(rootReducer, applyMiddleware(...middlerawes));

export default store;
