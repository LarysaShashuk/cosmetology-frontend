import { BlogStateType } from '../../types/types';
import { BLOG_ACTIONS_TYPES, AUTH_ACTIONS_TYPES } from '../actions';

const initialState = {
  articles: [],
  article: { _id: '', title: '', text: '' },
  loading: true,
};

const blogReducer = (state: BlogStateType = initialState, action: any) => {
  switch (action.type) {
    case BLOG_ACTIONS_TYPES.GET_ARTICLES:
      return { ...state, articles: action.payload, loading: false };

    case BLOG_ACTIONS_TYPES.DELETE_ARTICLE:
    case BLOG_ACTIONS_TYPES.ADD_ARTICLE:
    case BLOG_ACTIONS_TYPES.EDIT_ARTICLE:
      return { ...state, loading: false };

    case BLOG_ACTIONS_TYPES.GET_SINGLE_ARTICLE:
      return { ...state, article: action.payload, loading: false };

    case AUTH_ACTIONS_TYPES.LOGOUT:
      return {
        ...state,
        articles: null,
        loading: false
      };

    default:
      return state;
  }
};

export default blogReducer;
