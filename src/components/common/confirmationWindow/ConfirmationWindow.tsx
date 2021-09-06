import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import styles from './ConfirmationWindow.module.scss';

interface ConfirmationWindowProps {
  title: string;
  deleteAction: any;
  cancelAction: any;
}

export default function ConfirmationWindow(props: ConfirmationWindowProps) {
  const { title, deleteAction, cancelAction } = props;

  return (
<div className={styles.container}>
        <Card className={styles.windowWrap}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2' className={styles.title}>
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={styles.actionsWrap}>
        <Button size='small' variant='contained' color='secondary' onClick={()=>deleteAction()}>
          Delete
        </Button>
        <Button size='small' variant='contained' color='primary' onClick={()=>cancelAction()}>
          Cancel
        </Button>
      </CardActions>
    </Card>
</div>
  );
}
