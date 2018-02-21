import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './comps/home/home';
import Search from './comps/search/search'

export default(
    <Switch>
        <Route component={Home} path='/' exact/>
        <Route component={Search} path='/shop'/>
    </Switch>
)