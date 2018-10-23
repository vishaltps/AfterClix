import React from 'react';
import { Text } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const LoginHeader = () => (
    <Text style={styles.title}>
        AfterClix Login 
    </Text>
)

LoginHeader.propTypes = {
    text: PropTypes.string
}

export default LoginHeader;