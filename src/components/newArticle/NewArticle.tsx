import React, { useState } from 'react';
import { connect } from 'react-redux';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';

import { addArticle } from '../../actions';
import styles from './NewArticle.module.scss';
import ArticleForm from './ArticleForm';

interface MyFormValues {
  id: string;
  title: string;
  text: string;
}

function NewArticle(props: any) {
  const [isAddArticleVisible, setAddArticleVisible] = useState(false);
  const createId = () => new Date().getTime().toString();
  const initialValues: MyFormValues = { id: createId(), title: '', text: '' };

  const handleAddArticle = (newOne: any) => {
    const { dispatch } = props;

    if (newOne.title && newOne.text) {
      dispatch(addArticle(newOne));
    }

    return;
  };

  const toggleButton = (text: string, func: any) => {
    return (
      <div className={styles.toggleButton}>
        <Tooltip title={text} placement='right-start'>
          <Fab
            size='small'
            color='primary'
            aria-label='add'
            onClick={() => func()}
          >
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
          heading='New article adding...'
          isAddingArticle
        />
      )}
    </>
  );
}

export default connect()(NewArticle);
