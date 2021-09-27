import {BlogStateType} from '../../types/types';
import { ACTIONS_TYPES } from '../actions';

const initialState = {
  articles: [],
  article: {_id: '',title: '', text: ''},
  loading: true,
};



const blogReducer = (state: BlogStateType = initialState, action: any) => {
  switch (action.type) {
    case ACTIONS_TYPES.GET_ARTICLES:
      return { ...state, articles: action.payload, loading: false };

    case ACTIONS_TYPES.DELETE_ARTICLE:
        case ACTIONS_TYPES.ADD_ARTICLE:
        case ACTIONS_TYPES.EDIT_ARTICLE:
      return { ...state, loading: false };

    case ACTIONS_TYPES.GET_SINGLE_ARTICLE:
      return { ...state, article: action.payload, loading: false };

    default:
      return state;
  }
};

export default blogReducer;