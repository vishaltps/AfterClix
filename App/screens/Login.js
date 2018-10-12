import React, { Component } from 'react';
// import { LoginComponent } from '../components/LoginComponent';
// import {View, Text} from 'react-native';
// import { Button } from 'react-native-material-design';
import { View, Text} from 'react-native';
class Login extends Component {
  render(){
    return(
      <View>
        <Text>Hello world</Text>
        {/* <LoginComponent /> */}
        {/* <Button value="NORMAL FLAT" onPress={()=> console.log("I pressed a flat button")} />
        <Button value="NORMAL RAISED" raised={true} onPress={()=> console.log("I pressed a raised button")} /> */}
      </View>
    )
  }
}
export default Login;
