import { addArticle, deleteArticle, updateArticle } from './blogActions';

export const ACTIONS_TYPES = {
  GET_ARTICLES: 'GET_ARTICLES',
  ADD_ARTICLE: 'ADD_ARTICLE',
  DELETE_ARTICLE: 'DELETE_ARTICLE',
  EDIT_ARTICLE: 'EDIT_ARTICLE',
  GET_SINGLE_ARTICLE: 'GET_SINGLE_ARTICLE',
};

export { addArticle, deleteArticle, updateArticle };
