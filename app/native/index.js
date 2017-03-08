import React, { Component } from 'react';
import { Router, Reducer, Scene } from 'react-native-router-flux';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as AuthAction from '../actions/auth';

import Init from './containers/init';
import Login from './containers/login';
import Main from './containers/main';

const reducerCreate = params => {
  const defaultReducer = Reducer(params);

  return (state, action) => {
    console.log("ROUTER ACTION: ", action);
    return defaultReducer(state, action);
  }
}


export default class startup extends Component {
  render() {
    return(
      <Router createReducer={reducerCreate}>
        <Scene key="root" hideNavBar>
          <Scene key="init" component={Init} title="Init" intial />
          <Scene key="login" component={Login} title="Login" />
          <Scene key="main" component={Main} title="Main" />
        </Scene>
      </Router>
    );
  }
}
