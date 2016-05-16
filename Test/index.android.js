/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    TouchableHighlight
} from 'react-native';

import { add } from './app/actions/dispatchers/operationDispatchers.js';

import { MainScreen } from './app/components/MainScreen.js'

class Test extends Component {
  render() {
    return (
      <View style={styles1.container}>
          <TouchableHighlight onPress = {() => {
                                            var number = this.props.data;
                                            number = number + 1;
                                            this.props.dispatch(add(number));
                                        } }>
              <Text>Toggle</Text>
          </TouchableHighlight>
      </View>
    );
  }
    componentWillMount() {
        this.props.setSkeleton({
            toolbarHeight: 56,
            toolbarText: 'Main Screen',
            toolbarDefaultAction: ToolbarDefaultActions.NONE,
            drawerLockMode: 'locked-closed'
        });
    }

}

function mapStateToProps(state) {
    return {
        data: state.data
    };
}

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Test', () => Test);
