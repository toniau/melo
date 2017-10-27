import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

export default class app extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    return(
      <View style={{flex:1, padding: 10, justifyContent: 'center'}}>
        <Text style={{fontSize: 42, textAlign: 'center'}}>
          Melo
        </Text>
        <TextInput
          style={{height: 40}}
          placeholder="Email Address"
        />
        <Text></Text>
        <TextInput
          style={{height: 40, autoCorrect: false}}
          placeholder="Password"
          selectionColor="#000000"
          secureTextEntry={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
