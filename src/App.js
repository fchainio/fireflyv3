import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Platform,
  TouchableHighlight,
  Animated,
  Easing,
} from 'react-native';
import { Button, Text } from 'native-base';
import logo from './logo.png';

class App extends Component {
  state = {
    spinValue: new Animated.Value(0),
    isFalse: false,
  }

  onClick = () => {
    const wasRotated = this.state.spinValue._value === 1;
    Animated.timing(
      this.state.spinValue,
      {
        toValue: wasRotated ? 0 : 1,
        duration: 250,
        easing: Easing.linear
      }
    ).start()
  }

  render() {
    const spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });
    let dfalse = this.state.isFalse;

    return (
      <View style={styles.container}>
        <Animated.Image source={logo} style={[styles.logo, { transform: [{rotate: spin}] }]}/>
        <Text uppercase={dfalse} style={styles.title}>Create React Native Electron App</Text>
        <Text uppercase={dfalse}>Open up src/App.js to start working on your app!</Text>
        <Text uppercase={dfalse}>Changes you make will automatically reload.</Text>
        {Platform.OS !== 'web' && <Text>Shake your phone to open the developer menu.</Text>}
        <Button primary onPress={this.onClick}>
          <Text uppercase={dfalse} >Rotate Logo</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 300,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  button: {
    borderRadius: 3,
    padding: 20,
    marginVertical: 10,
    marginTop: 10,
    backgroundColor: '#1B95E0',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

let hotWrapper = () => () => App;
if (Platform.OS === 'web') {
  const { hot } = require('react-hot-loader');
  hotWrapper = hot;
}
export default hotWrapper(module)(App);
