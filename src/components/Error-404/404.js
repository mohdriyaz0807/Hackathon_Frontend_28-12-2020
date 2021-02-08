import React from "react";
import { Container, Grid,Paper, Button, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(5),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Error404() {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={12} className={classes.root}>
          <Paper className={classes.paper}>
          <h1>404</h1>
          <h2>Oops! You're lost.</h2>
          <p>
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p>
          <Link to="/">
            <Button variant="contained" color="primary">
              HOME
            </Button>
          </Link>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Error404;