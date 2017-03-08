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
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AuthAction from '../../actions/auth';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight= Dimensions.get('window').height;

// map redux store to props
function mapStateToProps(state) {
  return {
    auth: state.auth,
  }
}

// map actions to props
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      Auth: bindActionCreators(AuthAction, dispatch),
    }
  }
}

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobile: null,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.login} onPress={() => Actions.main()}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 80,
    backgroundColor: 'green',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
