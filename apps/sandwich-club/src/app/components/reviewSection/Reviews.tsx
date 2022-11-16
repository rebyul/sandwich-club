import { Box, Card, Container, Grid, Typography, styled } from '@mui/material';

import Rating from '@mui/material/Rating';

const PREFIX = 'ReviewGrid';
const classes = {
  paper: `${PREFIX}-paper`,
  control: `${PREFIX}-control`,
  reviewBody: `${PREFIX}-reviewBody`,
  reviewerName: `${PREFIX}-reviewerName`,
  rating: `${PREFIX}-rating`,
  reviewCard: `${PREFIX}-reviewCard`,
  container: `${PREFIX}-revieContainer`,
};

const ReviewGrid = styled(Grid)(({ theme }) => ({
  // flexGrow: 1,
  margin: '0',

  [`& .${classes.paper}`]: {
    height: 200,
    width: 300,
  },
  [`& .${classes.control}`]: {
    padding: theme.spacing(2),
  },
  [`& .${classes.reviewBody}`]: {
    textAlign: 'center',
    fontSize: 25,
  },
  [`& .${classes.reviewerName}`]: {
    textAlign: 'center',
    color: 'Gray',
    fontSize: 20,
  },
  [`& .${classes.rating}`]: {
    display: 'flex',
    margin: '0 auto',
    justifyContent: 'center',
  },
  [`& .${classes.reviewCard}`]: {
    padding: theme.spacing(5),
    height: '100%',
  },
  [`& .${classes.container}`]: {},
}));

function Reviews() {
  const reviewData: {
    body: string;
    name: string;
    rating: number;
  }[] = [
    {
      body: 'Food was definitely edible.',
      name: 'Tony Stark',
      rating: 5,
    },
    {
      body: 'I enjoyed filling my insides.',
      name: 'Jackie Chan',
      rating: 5,
    },
    {
      body: 'Too goooooooooooooood!',
      name: 'Bo',
      rating: 5,
    },
    {
      body: 'I am so valued now after enrolling into lunch bunch!',
      name: 'Kelvin',
      rating: 4,
    },
  ];

  return (
    <>
      <Box p={2}>
        <Typography variant="h4" align="center">
          User Reviews
        </Typography>
      </Box>

      <Container>
        <ReviewGrid
          container
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
          className={classes.container}
        >
          {reviewData.map((review) => {
            return (
              <Grid key={review.name} item xs={12} sm={4}>
                <Card className={classes.reviewCard}>
                  <div className={classes.reviewBody}>{review.body}</div>
                  <div className={classes.reviewerName}>{review.name}</div>
                  <Rating
                    name="read-only"
                    value={review.rating}
                    readOnly
                    className={classes.rating}
                  />
                </Card>
              </Grid>
            );
          })}
        </ReviewGrid>
      </Container>
    </>
  );
}

export { Reviews };
