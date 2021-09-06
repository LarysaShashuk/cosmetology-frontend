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
            There are no blog articles yet.
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
              You can create a new acticle with click on the "+" button above.
            </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
}