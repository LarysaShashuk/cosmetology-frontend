import { CONSTANTS } from '../actions';

const initialState = [
  {
    id: '0-initial',
    title: 'Mock title One',
    text: 'Mock text',
  },
  {
    id: '1-initial',
    title: 'Mock title Two',
    text: 'Mock text',
  },
  {
    id: '2-initial',
    title: 'Mock title Three',
    text: 'Mock text',
  },
];

const blogReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case CONSTANTS.ADD_ARTICLE:
      const newArticle = action.payload;
      return [newArticle, ...state];

    case CONSTANTS.REMOVE_ARTICLE:
      const articleID = action.payload;
      const existingArticleID = state.find(
        (article: any) => article.id === articleID
      );
      if (existingArticleID) {
        return state.filter((article: any) => article.id !== articleID);
      }
      break;

    case CONSTANTS.UPDATE_ARTICLE:
      const updatedArticle = action.payload;
      const existingArticleIndex = state.findIndex(
        (article: any) => article.id === updatedArticle.id
      );
      state.splice(existingArticleIndex, 1, updatedArticle);

      return [...state];

    default:
      return state;
  }
};

export default blogReducer;
