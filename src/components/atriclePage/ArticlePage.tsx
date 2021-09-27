import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateArticle, deleteArticle } from '../../redux/actions';

import { loadSingleArticle } from '../../redux/actions/blogActions';
import {ArticleType, UseParamsTypes, RootState} from '../../types/types';
import ArticleForm from '../newArticle/ArticleForm';
import ArticleBigCard from './ArticleBigCard';
import styles from './ArticlePage.module.scss';


const ArticlePage = () => {
  const [isUpdateArticleVisible, setUpdateArticleVisible] = useState(false);
  const { id } = useParams<UseParamsTypes>();
  let dispatch = useDispatch();
  let { article } = useSelector((state: RootState) => state.blog);

  useEffect(() => {
    dispatch(loadSingleArticle(id));
  }, [dispatch, id]);

  const handleUpdateArticle = (updatedArticle: ArticleType) => {
    dispatch(updateArticle(updatedArticle));
    return;
  };

  const handleDeleteArticle = (articleID: string) => {
    dispatch(deleteArticle(articleID));
    return;
  };

  return (
    <div className={styles.blogItemWrap}>
      {isUpdateArticleVisible ? (
        <ArticleForm
          initialValues={article}
          handleReduxAction={handleUpdateArticle}
          handleClose={() => setUpdateArticleVisible(false)}
          isArticlePage
        />
      ) : (
        <ArticleBigCard
          article={article}
          handleFormOpening={() => setUpdateArticleVisible(true)}
          handleDeleteArticle={handleDeleteArticle}
        />
      )}
    </div>
  );
};

export default ArticlePage;
