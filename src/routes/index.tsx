import React from 'react';
import {Switch, Router, Route} from 'react-router-dom';
import { Login } from '../pages/Login';
import {NotFound} from '../pages/Notfound';
import { Register } from '../pages/Register';
import {Dashboard} from '../pages/Dashboard'; 


const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/*" component={NotFound} />
    </Switch>
)

export default Routes;