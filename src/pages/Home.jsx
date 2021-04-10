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
import MiniShop from './MiniShop';

// const useStyles = makeStyles({
//   backgroundStyle: {
//     background: 'linear-gradient(135deg, #FE6B8C 10%, #FF8E53 90%)',
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 0,
//     padding: 0,
//   },
//   paperContainer: {
//     backgroundImage: `url(${Image})`,
//     height: 1356,
//     width: 2560,
//     paddingRight: '56.25%',
//   },
// });

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    // this.classes = useStyles();
  }

  onButtonClick = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    return (
      <div>
        <Grid item container>
          <Grid xs={12}>
            <ImageCard />
          </Grid>
        </Grid>
        <MiniShop />
        <ImageGridList />
      </div>
    );
  }
}
