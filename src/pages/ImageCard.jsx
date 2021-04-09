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

const useStyles = makeStyles({
  root: {
    borderRadius: 0,
  },
  media: {
    height: 510,
  },
  overlay: {
    position: 'absolute',
    top: '160px',
    left: '20px',
    color: '#403734',
    fontSize: 100,
    fontFamily: 'Poppins',
    lineHeight: 1.1,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='https://images.unsplash.com/photo-1524222717473-730000096953?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80'
          title='Contemplative Reptile'
        />
      </CardActionArea>
      <Typography className={classes.overlay}>
        Pretty <br />
        Peaches.
      </Typography>
    </Card>
  );
}
