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
  TouchableHighlight,
} from 'react-native';
import ListIssue from './ListIssue';
import TitleBar from './TitleBar';
import Twilio from 'react-native-twilio';


export default class Issue extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.info}>
          <Text style={styles.billcode}>{this.props.issue.bill.split(':')[0] + ':'}</Text>
          <Text style={styles.title}>{this.props.issue.bill.split(':')[1]} </Text>
        </View>
        <View style={styles.summary}>
          <Text style={styles.summaryText}>{this.props.issue.summary.join(' ')}</Text>
        </View>
        <View style={styles.action}>
          <TouchableHighlight style={styles.button} onPress={() => this.call()}><Text style={styles.buttonText}>{"Let's do this!"}</Text></TouchableHighlight>
          <Text style={styles.infoText}>I need more info</Text>
        </View>
      </View>
    );
  }

  call() {
    Twilio.initWithTokenUrl('https://hellogov.herokuapp.com/token?allowOutgoing=true');
    Twilio.connect({To: '+16506655061', From: '+16505217351', Url:'https://demo.twilio.com/docs/voice.xml'});
    Twilio.addEventListener('deviceDidStartListening', this._debug);
    Twilio.addEventListener('deviceDidStopListening', this._debug);
    Twilio.addEventListener('deviceDidReceiveIncoming', this._debug);
    Twilio.addEventListener('connectionDidStartConnecting', this._debug);
    Twilio.addEventListener('connectionDidConnect', this._debug);
    Twilio.addEventListener('connectionDidDisconnect', this._debug);
    Twilio.addEventListener('connectionDidFail', this._debug);
  }

  _debug(params) {
    console.log(params);
  }

  _billCode(bill) {

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3894A2',
  },
  info: {
    flex: 1,
    alignItems: 'center',
  },
  action: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 50,
  },
  billcode: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 5,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    marginBottom: 20,
  },
  summary: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  summaryText: {
    width: 350,
    fontSize: 20,
    color: 'white',
    lineHeight: 20,
    fontWeight: '100',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 60,
    width: 240,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#3894A2',
    fontSize: 20,
    fontWeight: 'bold',
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

AppRegistry.registerComponent('HelloGov', () => HelloGov);
