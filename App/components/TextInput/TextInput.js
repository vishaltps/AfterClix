import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';

const InputTextBox = (props) => { 
 
  // const { onPress, buttonText, editable = true, textColor } = props;
  return (
    <View >
        <View/>
        {/* <TextInput style={styles.input} underlineColorAndroid='transparent' {...props} /> */}
    </View>
  )
}

InputTextBox.propTypes = {
  onPress: PropTypes.func,
  textColor: PropTypes.string
}

export default InputTextBox;