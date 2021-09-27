import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

import {ArticleCardTypes} from '../../types/types';
import ConfirmationWindow from '../common/confirmationWindow/ConfirmationWindow';
import styles from './ArticleBigCard.module.scss';



const ArticleBigCard: React.FC<ArticleCardTypes> = (props) => {
  const { article, handleFormOpening, handleDeleteArticle } = props;
  const { _id, title, text } = article;

  const [confirmationWindowIsOpen, setConfirmationWindowOpen] = useState(false);
  const [isArticleDeleted, setArticleDeleted] = useState(false);

  return (
    <>
      {!isArticleDeleted && (
        <Card className={styles.blogItemWrap}>
          <CardContent>
            <div className={styles.contentHead}>
              <Typography gutterBottom variant='h5' component='h2'>
                {title}
              </Typography>
              <div className={styles.buttonsWrap}>
                <Tooltip
                  title='Edit'
                  placement='top-start'
                  onClick={handleFormOpening}
                >
                  <Fab size='small' color='primary' aria-label='edit'>
                    <EditIcon />
                  </Fab>
                </Tooltip>

                <Tooltip
                  title='Delete'
                  placement='top-start'
                  className={styles.deleteButton}
                  onClick={() => {
                    setConfirmationWindowOpen(true);
                  }}
                >
                  <Fab size='small' color='secondary' aria-label='delete'>
                    <DeleteIcon />
                  </Fab>
                </Tooltip>
              </div>
            </div>

            <Typography variant='body2' color='textSecondary' component='p'>
              {text}
            </Typography>
          </CardContent>

          <CardActions>
            <Button size='small' variant='contained' color='primary'>
              <Link className={styles.link} to='/'>
                Back to blog
              </Link>
            </Button>
          </CardActions>
        </Card>
      )}
      {isArticleDeleted && (
        <Card className={styles.blogItemWrap}>
          <CardContent>
            <div className={styles.contentHead}>
              <Typography gutterBottom variant='h5' component='h2'>
                The article was successfully deleted!
              </Typography>{' '}
            </div>
          </CardContent>

          <CardActions>
            <Button size='small' variant='contained' color='primary'>
              <Link
                className={styles.link}
                to='/'
                onClick={() => {
                  setArticleDeleted(false);
                }}
              >
                Back to blog
              </Link>
            </Button>
          </CardActions>
        </Card>
      )}
      {confirmationWindowIsOpen && (
        <ConfirmationWindow
          title='Are you sure you want to delete this article?'
          deleteAction={() => {
            handleDeleteArticle(_id);
            setConfirmationWindowOpen(false);
            setArticleDeleted(true);
          }}
          cancelAction={() => {
            setConfirmationWindowOpen(false);
          }}
        />
      )}
    </>
  );
};

export default ArticleBigCard;
