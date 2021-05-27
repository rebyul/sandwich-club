import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
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
    marginTop: 10,
    textAlign: 'center',
    fontSize: 25,
  },
  reviewerName: {
    textAlign: 'center',
    color: "Gray",
    fontSize: 20,
  }
}));


function Reviews() {
  const classes = useStyles();



  return (
    <>
      <Typography variant="h4" align="center">
        User Reviews
      </Typography>

      <Grid>
        <Grid
          container
          direction="row"
          justify="center"
          spacing = {2}
        >
          
          <Grid item>
            <Paper variant="outlined" className={classes.paper}>
              <div className={classes.reviewBody}>
                Food was definitely edible.
              </div>
              <div className={classes.reviewerName}>
                Marty McFly
              </div>
            </Paper>
          </Grid>

          <Grid item>
            <Paper variant="outlined" className={classes.paper}>
              <div className={classes.reviewBody}>
                Food was definitely edible.
              </div>
              <div className={classes.reviewerName}>
                Marty McFly
              </div>
            </Paper>
          </Grid>

          <Grid item>
            <Paper variant="outlined" className={classes.paper}>
              <div className={classes.reviewBody}>
                Food was definitely edible.
              </div>
              <div className={classes.reviewerName}>
                Marty McFly
              </div>
            </Paper>
          </Grid>

        </Grid>

      </Grid>
    </>
  );
}

  export { Reviews };
