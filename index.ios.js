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
import { issues } from './helpers';
import Issue from './Issue';

export default class HelloGov extends Component {

  constructor() {
    super();
    this.state = {};
  }

  _route(route, navigator) {
    if(route.id == 'issues') {
      return (<ListIssue navigator={navigator} />);
    } else {
      return (<Issue issue={route} />);
    }
  }
  render() {
    const routes = [
      {id: 'issues'},
    ];
    return (
      <View style={styles.container}>
        <TitleBar onBack={() => this.refs.navigator.pop()} />
        <Navigator
          ref='navigator'
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
});

AppRegistry.registerComponent('HelloGov', () => HelloGov);
