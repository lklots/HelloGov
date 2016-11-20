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
} from 'react-native';
import ListIssue from './ListIssue';

export default class HelloGov extends Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.circle}/>
        <Text style={styles.title}>HELLOGOV!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4BF37',
    flexDirection: 'row',
  },
  title: {
    color: '#47919F',
    fontSize: 20,
    textAlign: 'center',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50/2,
    backgroundColor: '#47919F',
  },
});

AppRegistry.registerComponent('HelloGov', () => HelloGov);
