import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { updateArticle, removeArticle } from '../../actions';

import ArticleForm from '../newArticle/ArticleForm';
import ArticleBigCard from './ArticleBigCard';
import styles from './ArticlePage.module.scss'

interface ParamTypes {
  id: string;
}

interface BlogItemProps {
  id: string;
  title: string;
  text: string;
}

interface State {
  blog: BlogItemProps[];
  dispatch:any;
}

const ArticlePage = (props: State) => {

   const {blog} = props;
  const { id } = useParams<ParamTypes>();

  const article = blog.find(article => article.id === id) ?? {id:'', title:'', text:''};

  const [isEditArticleVisible, setEditArticleVisible] = useState(false);

  const handleUpdateArticle = (undatedArticle: BlogItemProps) => {
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
    <div className={styles.blogItemWrap}>
      {isEditArticleVisible ? (
        <ArticleForm
          initialValues={article}
          handleReduxAction={handleUpdateArticle}
          handleClose={() => setEditArticleVisible(false)}
          isArticlePage
        />
      ) : (
        <ArticleBigCard 
          article={article}
          handleFormOpening={() => setEditArticleVisible(true)}
          handleRemoveArticle={handleRemoveArticle}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state:any) => ({
  blog: state.blog
})

export default connect(mapStateToProps)(ArticlePage);
