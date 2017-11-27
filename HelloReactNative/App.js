import React from 'react';
import { StyleSheet, Text, View, Button, Alert, AlertButton } from 'react-native';

export default class App extends React.Component {

  showAlert = () => {
    Alert.alert('Hello World', 'This is Sample', this.abtn);
  }

  abtn = [{ text: 'Ask me later', onPress: () => console.log('Ask me later pressed') }, 
  { text: 'Accept', onPress: () => console.log('Accept pressed') }];

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>Hello World !!!</Text>
        <Button onPress={this.showAlert} title="Click Me" ></Button>
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
});
