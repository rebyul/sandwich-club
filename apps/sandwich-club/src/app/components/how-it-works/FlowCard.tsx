import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React, { FC } from 'react';

import { styled } from '@mui/material/styles';

const PREFIX = 'FlowCard';

const classes = {
  root: `${PREFIX}-root`,
  media: `${PREFIX}-media`,
  content: `${PREFIX}-content`,
};

const Root = styled('div')(({ theme }) => ({
  [`& .${classes.root}`]: {
    minWidth: 295,
    Height: 0,
    border: 'none',
    boxShadow: 'none',
  },

  [`& .${classes.media}`]: {
    paddingTop: '56.25%', // 16:9
  },

  [`& .${classes.content}`]: {
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
  return (
    <Root>
      <Card className={classes.root}>
        <CardMedia image={imgUrl} className={classes.media}></CardMedia>
        <CardContent>
          <Typography className={classes.content} variant="h5" display="block">
            {title}
          </Typography>
          <Typography className={classes.content} variant="subtitle2" display="block">
            {subtitle}
          </Typography>
        </CardContent>
      </Card>
    </Root>
  );
};
