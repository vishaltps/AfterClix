import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';

const LoginButton = (title) => {     
  return (
      <Button raised title={title} backgroundColor="rgb(65, 146, 244)" color="#FFFFFF" onPress={this.handleSubmit}/>
  )
}

LoginButton.propTypes = {
  title: PropTypes.string
}

export default LoginButton;