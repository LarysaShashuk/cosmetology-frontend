import axios from 'axios';

import { BLOG_ACTIONS_TYPES } from './index';
import {ArticleType, AddArticleFormType} from '../../types/types';

const getArticle = (articles: ArticleType[]) => ({
  type: BLOG_ACTIONS_TYPES.GET_ARTICLES,
  payload: articles,
});

const articleDeleted = () => ({
  type: BLOG_ACTIONS_TYPES.DELETE_ARTICLE,
});

const articleAdded = () => ({
  type: BLOG_ACTIONS_TYPES.ADD_ARTICLE,
});

const articleEdited = () => ({
  type: BLOG_ACTIONS_TYPES.EDIT_ARTICLE,
});

const getSingleArticle = (article: ArticleType) => ({
  type: BLOG_ACTIONS_TYPES.GET_SINGLE_ARTICLE,
  payload: article,
});

export const loadArticles = () => {
    return function (dispatch: any) {
    axios
      .get(`${process.env.REACT_APP_SERVER_API_URL}/blog`)
      .then((response) => {
        dispatch(getArticle(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const deleteArticle = (articleID: string) => {
  return function (dispatch: any) {
    axios
      .delete(`${process.env.REACT_APP_SERVER_API_URL}/blog/${articleID}`)
      .then((response) => {
        dispatch(articleDeleted());
        dispatch(loadArticles());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addArticle = (newArticle: AddArticleFormType) => {
  return function (dispatch: any) {
    axios
      .post(`${process.env.REACT_APP_SERVER_API_URL}/blog`, newArticle)
      .then((response) => {
        dispatch(articleAdded());
        dispatch(loadArticles());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const loadSingleArticle = (articleID: string) => {
  return function (dispatch: any) {
    axios
      .get(`${process.env.REACT_APP_SERVER_API_URL}/blog/${articleID}`)
      .then((response) => {
        dispatch(getSingleArticle(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const updateArticle = (updatedArticle:  ArticleType) => {
console.log(updatedArticle);
  return function (dispatch: any) {
    axios
      .put(`${process.env.REACT_APP_SERVER_API_URL}/blog`, updatedArticle)
      .then((response) => {
        dispatch(articleEdited());
        dispatch(loadArticles());
        dispatch(getSingleArticle(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
