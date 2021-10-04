import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {BlogItemType, ArticleType} from '../../../../types/types';
import { updateArticle, deleteArticle } from '../../../../redux/actions';
import ArticleForm from '../../../articleForm/ArticleForm';
import ArticleSmallCard from '../articleSmallCard/ArticleSmallCard';



function BlogItem(props: BlogItemType) {
  const { article } = props;
   let dispatch: any = useDispatch();

  const [isUpdateArticleVisible, setUpdateArticleVisible] = useState(false);

  const handleUpdateArticle = (updatedArticle: ArticleType) => {
    dispatch(updateArticle(updatedArticle));
    return;
  };

  const handleDeleteArticle = (articleID: string) => {
    dispatch(deleteArticle(articleID));
    return;
  };

  return (
    <>
      {isUpdateArticleVisible && (
        <ArticleForm
          initialValues={article}
          handleReduxAction={handleUpdateArticle}
          handleClose={() => setUpdateArticleVisible(false)}
        />
      )}
      <ArticleSmallCard
        article={article}
        handleFormOpening={() => setUpdateArticleVisible(true)}
        handleDeleteArticle={handleDeleteArticle}
      />
    </>
  );
}

export default BlogItem;
