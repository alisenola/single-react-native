import React, { Component, PropTypes } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AuthAction from '../../actions/auth';
import * as MainAction from '../../actions/main';

// dumb components
import Header     from '../components/Header';
import HelloWorld from '../components/HelloWorld';

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

/** The app entry point */
class Main extends Component {
  render() {
    return (
      <div className="react-native-web">
        <Header />
        <HelloWorld
          onClick={() => this.props.actions.Main.toggleColor()}
          color={this.props.main.color}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);