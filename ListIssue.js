import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
import { issues } from './helpers';

export default class ListIssue extends Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Important Topics</Text>
        <Text style={styles.subtitle}>Click on an Issue to see current bills</Text>
      {
        issues.map(x => this.renderIssue(x.title))
      }
      </View>
    );
  }

  renderIssue(name) {
    return (
      <View key={name} style={styles.item} onPress={() => {this.props.navigator.push()}}>
        <Text style={styles.name}>{name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4791A0',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    color: 'white',
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    marginBottom: 100,
  },
  item: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#225667',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  name: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
});

AppRegistry.registerComponent('HelloGov', () => HelloGov);
