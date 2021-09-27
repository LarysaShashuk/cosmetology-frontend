import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';

import {ArticleCardTypes} from '../../types/types';
import ConfirmationWindow from '../common/confirmationWindow/ConfirmationWindow';
import styles from './ArticleSmallCard.module.scss';

function ArticleSmallCard(props: ArticleCardTypes) {
  const { article, handleFormOpening, handleDeleteArticle } = props;
  const { text, title, _id } = article;

  const [confirmationWindowIsOpen, setConfirmationWindowOpen] = useState(false);

  const sliceDescription = (text: string) => {
    return text.length > 200 ? text.slice(0, 200) + '...' : text;
  };

  return (
    <>
      <Card className={styles.blogItemWrap}>
        <CardActionArea className={styles.blogItemInnerWrap}>
          <Link className={styles.link} to={`/blog/${_id}`}>
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {title}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                {sliceDescription(text)}
              </Typography>
            </CardContent>
          </Link>
        </CardActionArea>
        <CardActions className={styles.actionsWrap}>
          <Button size='small' variant='contained' color='primary'>
            <Link className={styles.link} to={`/blog/${_id}`}>
              Read more
            </Link>
          </Button>

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
              placement='top-end'
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
        </CardActions>
      </Card>
      {confirmationWindowIsOpen && (
        <ConfirmationWindow
          title='Are you sure you want to delete this article?'
          deleteAction={() => handleDeleteArticle(_id)}
          cancelAction={() => {
            setConfirmationWindowOpen(false);
          }}
        />
      )}
    </>
  );
}

export default ArticleSmallCard;
