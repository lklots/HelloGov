/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Navigator,
} from 'react-native';
import ListIssue from './ListIssue';
import TitleBar from './TitleBar';

export default class HelloGov extends Component {

  constructor() {
    super();
    this.state = {};
  }

  _route(route, navigator) {
    if(route.id == 'issues') {
      return (<ListIssue navigator={navigator} />);
    } else {
      return (<Info />);
    }
  }
  render() {
    const routes = [
      {id: 'issues'},
    ];
    return (
      <View style={styles.container}>
        <TitleBar />
        <Navigator
          initialRoute={routes[0]}
          renderScene={this._route}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

AppRegistry.registerComponent('HelloGov', () => HelloGov);
