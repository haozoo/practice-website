import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar, CardMedia, IconButton, makeStyles } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    maxHeight: 350,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default function PeachCard(props) {
  const { avatarUrl, title, price, description, img } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar src={avatarUrl} />}
        action={
          <IconButton aria-label='settings'>
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={price}
      />
      <CardMedia
        className={classes.media}
        style={{ height: '150px' }}
        image={img}
      />
      <CardContent>
        <Typography variant='body2' component='p'>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>BUY NOW</Button>
        <Button size='small'>OFFER</Button>
      </CardActions>
    </Card>
  );
}
