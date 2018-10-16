import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Button } from 'react-native-material-ui';

const LoginComponent = () => {
  return(
    <View style={styles.container}>
      <Text style = {styles.heading}> Login </Text>
      <TextInput style = {styles.input} 
               autoCapitalize="none" 
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               keyboardType='email-address' 
               returnKeyType="next" 
               placeholder='Email or Mobile Num' 
               placeholderTextColor='rgba(225,225,225,0.7)'/>
      <TextInput style = {styles.input}   
              returnKeyType="go" 
              ref={(input)=> this.passwordInput = input} 
              placeholder='Password' 
              placeholderTextColor='rgba(225,225,225,0.7)' 
              secureTextEntry/>
        <Button primary raised text="Login"  onPress={this.handleSubmit} />
    </View>
  )

}

export default LoginComponent;