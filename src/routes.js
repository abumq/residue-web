// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router'

import Layout from './components/Layout';

import Home from './components/Home';
import About from './components/About';
import Server from './components/Server';
import ManageClients from './components/ManageClients';
import ManageLoggers from './components/ManageLoggers';
import CreateLogger from './components/CreateLogger';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={() => (<Layout><Home /></Layout>)} />
    <Route path="/about" component={() => (<Layout><About /></Layout>)} />
    <Route path="/server" component={() => (<Layout><Server info={[]} /></Layout>)} />
    <Route path="/clients" component={() => (<Layout><ManageClients clients={[]} p={props} /></Layout>)} />
    <Route path="/loggers" component={() => (<Layout><ManageLoggers loggers={[]} /></Layout>)} />
    <Route path="/loggers/create" component={() => (<Layout><CreateLogger clients={[]} /></Layout>)} />
    <Route path="*" component={() => (<Layout><NotFound /></Layout>)} />
  </Router>
);

export default Routes;
