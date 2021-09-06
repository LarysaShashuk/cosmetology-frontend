import React, { useState } from 'react';
import { connect } from 'react-redux';

import { updateArticle, removeArticle } from '../../actions';
import ArticleForm from '../newArticle/ArticleForm';
import ArticleSmallCard from './ArticleSmallCard';

interface ArticleProps {
  id: string;
  title: string;
  text: string;
}

interface BlogItemProps {
  article: ArticleProps;
  dispatch: any;
}

function BlogItem(props: BlogItemProps) {
  const { article } = props;
  const [isEditArticleVisible, setEditArticleVisible] = useState(false);

  const handleUpdateArticle = (undatedArticle: ArticleProps) => {
    const { dispatch } = props;

    dispatch(updateArticle(undatedArticle));

    return;
  };

  const handleRemoveArticle = (articleID: any) => {
    const { dispatch } = props;

    dispatch(removeArticle(articleID));

    return;
  };

  return (
    <>
      {isEditArticleVisible && (
        <ArticleForm
          initialValues={article}
          handleReduxAction={handleUpdateArticle}
          handleClose={() => setEditArticleVisible(false)}
        />
      )}
      <ArticleSmallCard
        article={article}
        handleFormOpening={() => setEditArticleVisible(true)}
        handleRemoveArticle={handleRemoveArticle}
      />
    </>
  );
}

export default connect()(BlogItem);
