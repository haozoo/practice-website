import {
  FilledInput,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import React from 'react';
import ImageCard from './Landing';
import ImageGridList from './PeachGallery';
import MiniShop from '../shop/MiniShop';

const useStyles = makeStyles({
  backgroundStyle: {
    background: 'linear-gradient(135deg, #FE6B8C 10%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 0,
    padding: 0,
  },
});

function Home() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className={classes.backgroundStyle}>
      <Grid item container>
        <Grid xs={12}>
          <ImageCard checked={checked} handleChange={handleChange} />
        </Grid>
      </Grid>
      <MiniShop checked={checked} />
      <ImageGridList />
    </div>
  );
}

export default Home;
