import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';

import {NewArticleType} from '../../types/types';
import { addArticle } from '../../redux/actions';
import styles from './NewArticle.module.scss';
import ArticleForm from './ArticleForm';

function NewArticle() {
  const [isAddArticleVisible, setAddArticleVisible] = useState(false);
  const initialValues: NewArticleType = {  title: '', text: '' };

  let dispatch: any = useDispatch();
  const handleAddArticle = (newOne: any) => {
    if (newOne.title && newOne.text) {
      dispatch(addArticle(newOne));
    }

    return;
  };

  const toggleButton = (text: string, func: any) => {
    return (
      <div className={styles.toggleButton}>
        <Tooltip title={text} placement="right-start">
          <Fab size="small" color="primary" aria-label="add" onClick={() => func()}>
            <AddIcon />
          </Fab>
        </Tooltip>
      </div>
    );
  };

  return (
    <>
      {toggleButton('Add new article', () => setAddArticleVisible(true))}
      {isAddArticleVisible && (
        <ArticleForm
          initialValues={initialValues}
          handleReduxAction={handleAddArticle}
          handleClose={() => setAddArticleVisible(false)}
          heading="New article adding..."
          isAddingArticle
        />
      )}
    </>
  );
}

export default NewArticle;
