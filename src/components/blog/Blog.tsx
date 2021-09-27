import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadArticles } from '../../redux/actions/blogActions';
import { RootState } from '../../types/types';
import Placeholder from '../common/placeholder/Placeholder';
import NewArticle from '../newArticle/NewArticle';
import BlogItem from './BlogItem';
import styles from './Blog.module.scss';


const Blog = () => {
  let dispatch = useDispatch();

  let { articles } = useSelector((state: RootState) =>  state.blog);

  useEffect(() => {
    dispatch(loadArticles());
  }, [dispatch]);

  return (
    <div className={styles.blogPageWrap}>
      <h1 className={styles.heading}>Blog</h1>

      <NewArticle />

      <div className={styles.blogGrid}>
        {articles && articles.map((item) => (
          <BlogItem key={item._id} article={item} />
        ))}
      </div>

      {articles && articles.length === 0 && <Placeholder />}
    </div>
  );
};

export default Blog;
