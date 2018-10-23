import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
class Welcome extends Component {
  render(){
    return(
      <View  style={ styles.container }>
        <Text> Welcome to AfterClix </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#4F6D7A',
      alignItems: 'center',
      justifyContent: 'center',
  },
});

export default Welcome;