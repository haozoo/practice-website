import { AppBar, Button, Grid, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  logoStyle: {
    flexGrow: 1,
    color: '#403734',
    fontSize: 20,
    fontFamily: 'Poppins',
  },
  appBarStyle: {
    background:
      'linear-gradient(225deg, rgba(255,96,0,1) 0%, rgba(255,58,102,1) 100%)',
    border: 10,
    height: 55,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBarStyle} position='static'>
      <Toolbar>
        <Typography className={classes.logoStyle} position='static'>
          Penor.
        </Typography>
        <Button color='inherit'>Shop</Button>
        <Button color='inherit'>Sell</Button>
        <AccountCircleIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
