import { CONSTANTS } from './index';
import { newArticleType, articleIDType, updatedArticleType } from './types';

export const addArticle = (newArticle: newArticleType) => {
  return {
    type: CONSTANTS.ADD_ARTICLE,
    payload: newArticle,
  };
};

export const removeArticle = (articleID: articleIDType) => {
  return {
    type: CONSTANTS.REMOVE_ARTICLE,
    payload: articleID,
  };
};

export const updateArticle = (updatedArticle: updatedArticleType) => {
  return {
    type: CONSTANTS.UPDATE_ARTICLE,
    payload: updatedArticle,
  };
};
