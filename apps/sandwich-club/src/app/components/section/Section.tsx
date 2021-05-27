import { makeStyles } from '@material-ui/core';
import { FC } from 'react';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const Section: FC = ({ children }) => {
  const classes = useStyles();

  if (!children) return null;
  return <div className={classes.root}>{children}</div>;
};
