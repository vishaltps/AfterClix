import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoginComponent } from '../components/LoginComponent';
// import { Button } from 'react-native-material-design';
import { View, Text, TextInput, StatusBar} from 'react-native';
import { Button } from 'react-native-material-ui';
import PropTypes from 'prop-types';
import { connectAlert } from '../components/Alert';
import { login, handleEmailChange, handlePasswordChange } from '../actions/authentication';


class Login extends Component {

  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    user: PropTypes.object,
    email: PropTypes.string,
    password: PropTypes.string,
    alertWithType: PropTypes.func,
    loginError: PropTypes.string
  }
  componentWillReceiveProps(nextProps) {
    // if (nextProps.loginError && nextProps.loginError !== this.props.loginError) {
    if (nextProps.loginError ) {
        this.props.alertWithType("error", "Error occurred in login", nextProps.loginError)
    }
  }
  handleSubmit = () => {
    this.props.dispatch(login(this.props.email, this.props.password))
  }

  handleChange = (type, e) => {
    if (type === "email"){
      this.props.dispatch(handleEmailChange(e))
    }
    else{
      this.props.dispatch(handlePasswordChange(e))
    }
  }

  render(){
    return(
      <View style={{ flex: 1 ,justifyContent: 'center'}}>
      <StatusBar barStyle="default" translucent={false} />
          <Text style={{ alignContent: "center" }}> Login </Text>
      <TextInput  
               autoCapitalize="none" 
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               keyboardType='email-address' 
               returnKeyType="next" 
               placeholder='Email' 
              //  onChangeText={this.props.changeEmailValue}
               onChangeText={event => this.handleChange("email",event)}
               placeholderTextColor='rgb(65, 146, 244)'/>
      <TextInput    
              returnKeyType="go" 
              ref={(input)=> this.passwordInput = input} 
              placeholder='Password' 
              placeholderTextColor='rgb(65, 146, 244)' 
              onChangeText={event => this.handleChange("password",event)}
              secureTextEntry/>
        <Button primary raised text="Login"  onPress={this.handleSubmit}/>
    </View>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    // user: state.authentication.user
    email: state.authentication.email,
    password: state.authentication.password,
    loginError: state.authentication.error
  }
}
// const mapDispatchToProps = dispatch => {
//   return {
//       changeEmailValue: (text) => dispatch({type: 'CHANGE_EMAIL_VALUE', text}),
//       changePasswordValue: (text) => dispatch({type: 'CHANGE_PASSWORD_VALUE', text})
//   };
// };


// export default connect(mapStateToProps, mapDispatchToProps)(connectAlert(Login));
export default connect(mapStateToProps)(connectAlert(Login));
// export default connectAlert(Login);
