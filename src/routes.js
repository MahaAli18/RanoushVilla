import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import MainWeb from './website/home';
import AboutUs from './website/AboutUs';
import Test from './website/test';

const Routes = () => (
    <Router >
        <Switch>
            <Route exact path="/" component={MainWeb} />
            <Route exact path="/test" component={Test} />
            <Route exact path="/aboutus" component={AboutUs} />
        </Switch>
    </Router>
);
export default Routes;