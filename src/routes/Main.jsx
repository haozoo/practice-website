import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../components/pages/home/Home';
import Shop from '../components/pages/shop/Shop';
import FAQ from '../components/pages/FAQ';
import Profile from '../components/pages/profile/Profile';
import Map from '../components/pages/Map';

const Main = () => {
  return (
    <Switch>
      {' '}
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/Shop' component={Shop}></Route>
      <Route exact path='/FAQ' component={FAQ}></Route>
      <Route exact path='/Profile' component={Profile}></Route>
      <Route exact path='/Map' component={Map}></Route>
    </Switch>
  );
};

export default Main;
