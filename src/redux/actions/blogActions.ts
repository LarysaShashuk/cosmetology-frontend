import $api from '../../http/index';
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
     $api
      .get('/blog',)
      .then((response) => {
        dispatch(getArticle(response.data));
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
};

export const deleteArticle = (articleID: string) => {
  return function (dispatch: any) {
     $api
      .delete(`/blog/${articleID}`,)
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
    $api
      .post(`/blog`, newArticle)
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
     $api
      .get(`/blog/${articleID}`,)
      .then((response) => {
        dispatch(getSingleArticle(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const updateArticle = (updatedArticle:  ArticleType) => {
  return function (dispatch: any) {
    $api
      .put(`/blog`, updatedArticle)
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
