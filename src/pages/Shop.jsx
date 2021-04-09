import React from 'react';
import { Grid } from '@material-ui/core';
import Items from '../Items';
import RecipeReviewCard from '../RecipeReviewCard';

const useStyles = makeStyles({
  backgroundStyle: {
    background: 'linear-gradient(135deg, #FE6B8C 10%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 0,
    padding: 0,
  },
  paperContainer: {
    backgroundImage: `url(${Image})`,
    height: 1356,
    width: 2560,
    paddingRight: '56.25%',
  },
});

function Shop() {
  const classes = useStyles();
  return (
    <div className={classes.backgroundStyle}>
      <Grid container direction='column'>
        <Grid item container>
          <Grid xs={false} sm={2} />
          <Grid xs={12} sm={8}>
            <Items />
          </Grid>
          <Grid xs={false} sm={2} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Shop;
