import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import Items from './Items';

const useStyles = makeStyles({
  textStyle: {
    color: '#403734',
    fontFamily: 'Poppins',
    align: 'left',
    variant: 'h2',
  },
});

function Shop() {
  const classes = useStyles();

  return (
    <Grid container direction='column'>
      <Grid item container>
        <Grid xs={false} sm={2} />
        <Grid xs={12} sm={8}>
          <Typography className={classes.textStyle}>
            <br />
            Shop from local suppliers
          </Typography>
        </Grid>
        <Grid xs={false} sm={2} />
      </Grid>
      <Grid item container>
        <Grid xs={false} sm={2} />
        <Grid xs={12} sm={8}>
          <Items />
        </Grid>
        <Grid xs={false} sm={2} />
      </Grid>
    </Grid>
  );
}

export default Shop;
