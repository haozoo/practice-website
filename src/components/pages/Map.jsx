import { Box, Button } from '@material-ui/core';
import React from 'react';
import Map1 from '../../images/map1.jpg';
import { MapInteractionCSS } from 'react-map-interaction';

function Map() {
  return (
    <MapInteractionCSS zoom='disabled'>
      <img src='https://images.unsplash.com/photo-1582909146538-22dfdbc8d0d2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1441&q=80' />
    </MapInteractionCSS>
  );
}

export default Map;
