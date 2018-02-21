import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './comps/home/home';

export default(
    <Switch>
        <Route component={Home} path='/' exact/>
    </Switch>
)