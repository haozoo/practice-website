// import React from 'react';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardMedia from '@material-ui/core/CardMedia';

// // const useStyles = makeStyles({
// // });

// export default function ImageCard() {
//   // const classes = useStyles();

//   return (
//     <Card>
//       <CardMedia image='../public/fire.jpeg' title='Fire!' />
//     </Card>
//   );
// }
import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Button, Paper, Slide } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
  root: {
    borderRadius: 0,
    position: 'relative',
    width: '100%',
    zIndex: 1,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  media: {
    height: 500,
  },
  overlay: {
    position: 'absolute',
    top: '160px',
    left: '20px',
    color: '#403734',
  },
  head: {
    fontSize: 100,
    fontFamily: 'Poppins',
    lineHeight: 1.1,
  },
  linkStyle: {
    textDecoration: 'none',
    paddingRight: 10,
  },
});

export default function ImageCard({ checked, handleChange }) {
  const classes = useStyles();

  return (
    <Slide direction='down' in={true} timeout={2000} mountOnEnter>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image='https://images.unsplash.com/photo-1524222717473-730000096953?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80'
            title='Contemplative Reptile'
          />
        </CardActionArea>
        <Slide direction='right' in={true} timeout={2000} mountOnEnter>
          <Typography className={classes.overlay}>
            <Typography className={classes.head}>
              Pretty <br />
              Peaches. <br />
            </Typography>
            <Button className={classes.buttonStyle} onClick={handleChange}>
              {!checked ? 'Start shopping now!' : 'No more shopping :('}
              <KeyboardArrowRightIcon size='100px' />
            </Button>
          </Typography>
        </Slide>
      </Card>
    </Slide>
  );
}
