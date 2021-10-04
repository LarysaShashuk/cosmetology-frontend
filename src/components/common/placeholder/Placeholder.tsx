import React from "react";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import styles from './Placeholder.module.scss';

export default function Placeholder(){
    return  <Card className={styles.container}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2' >
            Поки що немає статей у блозі.
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
              Ви можете додати статтю натиснувши на кнопку "+" , що знаходиться вище.
            </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
}