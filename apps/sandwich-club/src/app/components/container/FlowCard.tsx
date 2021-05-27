import React, { FC } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 245,
    Height: 0,
    border: 'none',
    boxShadow: 'none',
  },
  media: {
    paddingTop: '56.25%', // 16:9
  },
  content: {
    marginBottom: '8px',
    textAlign: 'center',
  },
}));

type Props = {
  imgUrl: string;
  title: string;
  subtitle: string;
};

export const FlowCard: FC<Props> = ({ imgUrl, title, subtitle }) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardMedia image={imgUrl} className={classes.media}></CardMedia>
        <CardContent>
          <Typography className={classes.content} variant="h5" display="block">{title}</Typography>
          <Typography className={classes.content} variant="subtitle2" display="block">
            {subtitle}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
