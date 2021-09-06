import React from 'react';
import { connect } from 'react-redux';

import Placeholder from '../common/placeholder/Placeholder';
import NewArticle from '../newArticle/NewArticle';
import BlogItem from './BlogItem';
import styles from './Blog.module.scss';

interface blogItemProps {
  id: string;
  title: string;
  text: string;
}

interface State {
  blog: blogItemProps[];
}

const Blog = (props: State) => {
  const { blog } = props;

  return (
    <div className={styles.blogPageWrap}>
      <h1 className={styles.heading}>Blog</h1>

      <NewArticle />

      <div className={styles.blogGrid}>
        {blog.map((item: blogItemProps) => (
          <BlogItem key={item.id} article={item} />
        ))}
      </div>

      {
        blog.length === 0 && <Placeholder/>
      }
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  blog: state.blog,
});

export default connect(mapStateToProps)(Blog);
