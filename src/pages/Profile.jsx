import { Avatar, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  textStyle: {
    color: '#403734',
    fontFamily: 'Poppins',
    align: 'left',
    variant: 'h2',
  },
});

function Profile() {
  const classes = useStyles();

  return (
    <Grid container direction='column'>
      <Grid item container>
        <Grid xs={false} sm={2} />
        <Grid xs={12} sm={8}>
          <Typography className={classes.textStyle}>
            <br />
            Profile
          </Typography>
        </Grid>
        <Grid xs={false} sm={2} />
      </Grid>
      <Grid item container>
        <Grid xs={false} sm={2} />
        <Grid xs={12} sm={8}>
          <Avatar>HX</Avatar>
        </Grid>
        <Grid xs={false} sm={2} />
      </Grid>
    </Grid>
  );
}

export default Profile;
