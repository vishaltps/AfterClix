import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoginComponent } from '../components/LoginComponent';
import { View, Text, TextInput, StatusBar, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import { connectAlert } from '../components/Alert';
import { LoginHeader } from '../components/Text';
import { LoginButton } from '../components/Button';
import { login, handleEmailChange, handlePasswordChange } from '../actions/user';
import { AsyncStorage } from "react-native";

class Login extends Component {

  static propTypes = {
    navigation: PropTypes.object,
    user: PropTypes.object,
    email: PropTypes.string,
    password: PropTypes.string,
    isAuthenticated: PropTypes.bool,
    alertWithType: PropTypes.func,
    loginError: PropTypes.string
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.loginError && nextProps.loginError !== this.props.loginError ) {
        this.props.alertWithType("error", "Error occurred in login", nextProps.loginError)
    }
    else if(nextProps.isAuthenticated === true) {
      // const accessToken = await AsyncStorage.getItem('access_token')
      _retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('accessToken');
          if (value !== null) {
            console.log("Value" , value);
          }
         } catch (error) {
           // Error retrieving data
         }
      }
      this.props.navigation.navigate('Welcome', {title: "Welcome"});
    }
  }
  handleSubmit = () => {
    this.props.login(this.props.email, this.props.password)
  }

  render(){
    return(
      <View style={{ flex: 1, justifyContent: 'center' }}>
      <StatusBar barStyle="default" translucent={false} />
      <KeyboardAvoidingView behavior='padding'>
        <LoginHeader />
        <TextInput  
               autoCapitalize="none" 
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               keyboardType='email-address' 
               returnKeyType="next" 
               placeholder='Email' 
              onChangeText={this.props.changeEmailValue}
               placeholderTextColor='rgb(65, 146, 244)'/>
      <TextInput    
              returnKeyType="go" 
              ref={(input)=> this.passwordInput = input} 
              placeholder='Password' 
              placeholderTextColor='rgb(65, 146, 244)' 
              onChangeText={this.props.changePasswordValue}
              secureTextEntry/>
      <Button raised title="Login" backgroundColor="rgb(65, 146, 244)" color="#FFFFFF" onPress={this.handleSubmit}/>
      </KeyboardAvoidingView>
    </View>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    // user: state.authentication.user
    email: state.user.email,
    password: state.user.password,
    isAuthenticated: state.user.isAuthenticated,
    loginError: state.user.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
      changeEmailValue: (text) => dispatch({type: 'CHANGE_EMAIL_VALUE', text}),
      changePasswordValue: (text) => dispatch({type: 'CHANGE_PASSWORD_VALUE', text}),
      login: (email,password) => dispatch({type: 'LOGIN', email, password}),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(connectAlert(Login));
// export default connect(mapStateToProps)(connectAlert(Login));
// export default connectAlert(Login);
