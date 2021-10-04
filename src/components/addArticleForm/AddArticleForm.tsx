import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';

import {AddArticleFormType} from '../../types/types';
import { addArticle } from '../../redux/actions';
import styles from './AddArticleForm.module.scss';
import ArticleForm from '../articleForm/ArticleForm';

export default function AddArticleForm() {
  const [isAddArticleVisible, setAddArticleVisible] = useState(false);
  const initialValues: AddArticleFormType = {  title: '', text: '' };

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
      {toggleButton('Додати нову статтю', () => setAddArticleVisible(true))}
      {isAddArticleVisible && (
        <ArticleForm
          initialValues={initialValues}
          handleReduxAction={handleAddArticle}
          handleClose={() => setAddArticleVisible(false)}
          heading="Створення нової статті..."
          isAddingArticle
        />
      )}
    </>
  );
}

