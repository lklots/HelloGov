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
  TouchableOpacity,
} from 'react-native';
import ListIssue from './ListIssue';

export default class TitleBar extends Component {

  constructor() {
    super();
    this.state = {};
  }

  back() {
    return (
      <TouchableOpacity style={styles.back} onPress={this.props.onBack}>
        <Text style={styles.backText}>
          Back
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.left}>{this.back()}</View>
        <View style={styles.center}>
          <Text style={styles.title}>helloGOV!</Text>
        </View>
        <View style={styles.right}>
        </View>
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
  left: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  center: {
    flex:1,
    justifyContent: 'center',
  },
  right: {
    flex: 1,
  },
  back: {
    flex: 1,
    marginLeft: 10,

  },
  backText: {
    color: '#3A7F8E',
    fontWeight: 'bold',
  },
  title: {
    justifyContent: 'center',
    color: '#47919F',
    fontSize: 20,
    textAlign: 'center',
  },
});

AppRegistry.registerComponent('HelloGov', () => HelloGov);
