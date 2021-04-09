import { AppBar, Button, Grid, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

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
  buttonStyle: {
    variant: 'h1',
    color: '#403734',
    fontSize: 18,
    fontFamily: 'Poppins',
    textTransform: 'none',
    boxShadow: 'none',
    backgroundColor: 0,
    borderColor: 0,
  },
  linkStyle: {
    textDecoration: 'none',
    paddingRight: 10,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBarStyle} position='static'>
      <Toolbar>
        <Typography className={classes.logoStyle} position='static'>
          <Link className={classes.linkStyle} to='/'>
            <Button className={classes.buttonStyle}>Penor.</Button>
          </Link>
        </Typography>
        <Link className={classes.linkStyle} to='/Shop'>
          <Button className={classes.buttonStyle}>SHOP</Button>
        </Link>
        <Link className={classes.linkStyle} to='/FAQ'>
          <Button className={classes.buttonStyle} color='inherit'>
            FAQ
          </Button>
        </Link>
        <AccountCircleIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
