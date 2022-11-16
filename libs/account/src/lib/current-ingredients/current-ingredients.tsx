import { Avatar, Button, Fade, Grid, Paper, Typography } from '@mui/material';

import IconButton from '@mui/material/IconButton';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import InfoIcon from '@mui/icons-material/Info';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

const PREFIX = 'CurrentIngredients';

const classes = {
  root: `${PREFIX}-root`,
  gridList: `${PREFIX}-gridList`,
  gridListItem: `${PREFIX}-gridListItem`,
  icon: `${PREFIX}-icon`,
  paper: `${PREFIX}-paper`,
  title: `${PREFIX}-title`,
  titleBar: `${PREFIX}-titleBar`,
};

const StyledGrid = styled(Grid)(({ theme }) => ({
  [`& .${classes.root}`]: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },

  [`& .${classes.gridList}`]: {
    width: 800,
    height: 450,
  },

  [`& .${classes.gridListItem}`]: {
    borderRadius: 25,
  },

  [`& .${classes.icon}`]: {
    color: 'rgba(255, 255, 255, 0.54)',
  },

  [`& .${classes.paper}`]: {
    height: '100%',
    padding: theme.spacing(1),
  },

  [`& .${classes.title}`]: {
    color: 'white',
  },

  [`& .${classes.titleBar}`]: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
}));

export interface CurrentIngredientsProps {
  date: number;
}

const tileData = [
  {
    img: 'https://static.countdown.co.nz/assets/product-images/zoom/9415142008554.jpg',
    title: 'Bread',
    cost: '$3.49',
  },
  {
    img: 'https://static.countdown.co.nz/assets/product-images/zoom/9414735954537.jpg',
    title: 'Chicken',
    cost: '$7.99',
  },
  {
    img: 'https://static.countdown.co.nz/assets/product-images/zoom/9421026690722.jpg',
    title: 'Lettuce',
    cost: '$2.49',
  },
  {
    img: 'https://static.countdown.co.nz/assets/product-images/zoom/265691000009.jpg',
    title: 'Tomato',
    cost: '$9.99 per kg',
  },
];

export function CurrentIngredients(props: CurrentIngredientsProps) {
  const { date } = props;

  const [users, setUsers] = useState([
    {
      value: 0,
      name: 'Marcus',
      image: '../assets/Marcus.jpg',
    },
    {
      value: 1,
      name: 'Han Bo',
      image: '../assets/Hanbo.png',
    },
    {
      value: 2,
      name: 'Dom',
      image: '../assets/Dom.jpg',
    },
    {
      value: 3,
      name: 'Anders',
      image: '../assets/Anders.jpg',
    },
  ]);
  const [costs] = useState(18.73);

  return (
    <StyledGrid container spacing={3} style={{ marginBottom: '64px' }}>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <div className={classes.root}>
          <ImageList rowHeight={180} className={classes.gridList} cols={3}>
            <ImageListItem key="Subheader" cols={3} style={{ height: 'auto' }}>
              <ListSubheader component="div">Week {date + 1}</ListSubheader>
            </ImageListItem>
            {tileData.map((tile) => (
              <ImageListItem key={tile.img} cols={1} className={classes.gridListItem}>
                <Fade timeout={Math.random() * (1000 - 100) + 100} in={true}>
                  <Paper elevation={0} className={classes.paper}>
                    <img
                      src={tile.img}
                      alt={tile.title}
                      style={{ width: '100%', height: '100%', left: '25%', objectFit: 'contain' }}
                    />
                    <ImageListItemBar
                      title={tile.title}
                      subtitle={<span>{tile.cost}</span>}
                      classes={{
                        root: classes.titleBar,
                        title: classes.title,
                      }}
                      actionIcon={
                        <IconButton
                          aria-label={`info about ${tile.title}`}
                          className={classes.icon}
                          size="large"
                        >
                          <InfoIcon />
                        </IconButton>
                      }
                    />
                  </Paper>
                </Fade>
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h5" gutterBottom>
          Enrolled people
        </Typography>
        <List dense className={classes.root}>
          {users.map((user) => {
            const labelId = `checkbox-list-secondary-label-${user.value}`;
            return (
              <ListItem key={user.value} button>
                <ListItemAvatar>
                  <Avatar alt={`Avatar n°${user.value + 1}`} src={user.image} />
                </ListItemAvatar>
                <ListItemText id={labelId} primary={user.name} />
              </ListItem>
            );
          })}
        </List>
        {date !== 0 && users.length < 5 && (
          <Button
            onClick={() => {
              setUsers([
                ...users,
                {
                  name: 'Kelvin',
                  image: '../assets/kelvin.png',
                  value: 9,
                },
              ]);
            }}
          >
            Enrol now!
          </Button>
        )}
        <Typography variant="h5" gutterBottom>
          Cost per person: <br />
          {`$${(costs / users.length).toFixed(2)}`}
        </Typography>
      </Grid>
    </StyledGrid>
  );
}

export default CurrentIngredients;
