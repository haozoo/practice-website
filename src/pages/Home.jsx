import {
  FilledInput,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import React from 'react';
import ImageCard from './ImageCard';
import Image from './peaches.jpg';
import ImageGridList from './ImageGridList';

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

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.backgroundStyle}>
      <Grid item container>
        <Grid xs={12}>
          <ImageCard />
        </Grid>
      </Grid>
      <ImageGridList />
    </div>
  );
}

export default Home;
