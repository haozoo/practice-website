import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Shop from './Shop';

const useStyles = makeStyles((theme) => ({
  root: {
    maxheight: 1000,
  },
  paper: {
    margin: theme.spacing(4),
    paddingBottom: '100px',
  },
}));

export default function MiniShop({ checked }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Collapse in={checked}>
          <Paper elevation={4} className={classes.paper}>
            <Shop width={8} padding={2} />
            <br />
          </Paper>
        </Collapse>
      </div>
    </div>
  );
}
