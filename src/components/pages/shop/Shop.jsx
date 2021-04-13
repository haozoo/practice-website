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

function Shop(props) {
  const { width = 8, padding = 2 } = props;
  const classes = useStyles();

  return (
    <Grid container direction='column'>
      <Grid item container>
        <Grid xs={false} sm={padding} />
        <Grid xs={12} sm={width}>
          <Typography className={classes.textStyle}>
            <br />
            Shop from local suppliers
          </Typography>
        </Grid>
        <Grid xs={false} sm={padding} />
      </Grid>
      <Grid item container>
        <Grid xs={false} sm={padding} />
        <Grid xs={12} sm={width}>
          <Items />
        </Grid>
        <Grid xs={false} sm={padding} />
      </Grid>
    </Grid>
  );
}

export default Shop;
