/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import {
  AppRegistry,
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AuthAction from '../../actions/auth';
import * as MainAction from '../../actions/main';

import { appStyle } from '../styles/styles';

import Header     from '../components/Header';
import HelloWorld from '../components/HelloWorld';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

// map redux store to props
function mapStateToProps(state) {
  return {
    auth: state.auth,
    main: state.main,
  }
}

// map actions to props
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      Auth: bindActionCreators(AuthAction, dispatch),
      Main: bindActionCreators(MainAction, dispatch),
    }
  }
}

class Main extends Component {
  render() {
    return (
      <View style={appStyle.reactNativeWeb}>
        <Header />
        <HelloWorld
          onPress={() => this.props.actions.Main.toggleColor()}
          color={this.props.main.color}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: deviceWidth,
    height: deviceHeight,
    backgroundColor: '#F5FCFF',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
