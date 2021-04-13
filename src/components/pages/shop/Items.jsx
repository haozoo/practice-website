import React from 'react';
import PeachCard from './PeachCard';
import { Grid } from '@material-ui/core';
import PeachList from './PeachData';

// default px integer is multiplier
function Items() {
  const getPeachCard = (peachObj) => {
    return (
      <Grid item xs={12} sm={4}>
        <PeachCard {...peachObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={3}>
      {PeachList.map((peachObj) => getPeachCard(peachObj))}
    </Grid>
  );
}

export default Items;
