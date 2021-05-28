import { Box, Card, Container, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import Rating from '@material-ui/lab/Rating';
import React from "react";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 200,
    width: 300,
  },
  control: {
    padding: theme.spacing(2),
  },
  reviewBody: {
    textAlign: "center",
    fontSize: 25,
  },
  reviewerName: {
    textAlign: "center",
    color: "Gray",
    fontSize: 20,
  },
  rating: {
    display: "flex",
    margin: "0 auto",
    justifyContent: "center"
  }, 
  reviewCard: {
    padding: theme.spacing(5),
    height: "100%",
  },
  container: {
    margin: '0',
  }
}));


function Reviews() {
  const classes = useStyles();

  const reviewData: {
    body: string;
    name: string;
    rating: number;
  }[] = [
    {
      body: "Food was definitely edible.",
      name: "Tony Stark",
      rating: 5,
    },
    {
      body: "I enjoyed filling my insides.",
      name: "Jacky Chan",
      rating: 5,
    },
    {
      body: "Too goooooooooooooood!",
      name: "Bo",
      rating: 5,
    },

  ]

  


  return (
    <>
      <Box p={2}>
      <Typography variant="h4" align="center">User Reviews</Typography>
      </Box>

      <Container>
        <Grid 
          container 
          spacing={4}
          justify="center"
          alignItems="stretch"
          xs={12}
          className={classes.container}
        >

        {
          reviewData.map(
            review => {
              return (
                <Grid 
                item
                xs={12}
                sm={4}
                >
                    <Card className={classes.reviewCard}>
                    <div className={classes.reviewBody}>{review.body}</div>
                    <div className={classes.reviewerName}>{review.name}</div>
                    <Rating name="read-only" value={review.rating} readOnly className={classes.rating} />
                  </Card>
                </Grid>
              )
            }
          ) 
        }

        </Grid>
      </Container>

    </>
  );
}

  export { Reviews };
