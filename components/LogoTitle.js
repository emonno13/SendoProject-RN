import React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';

export default class LogoTitle extends React.Component {
    render() {
        return(
            <TouchableOpacity>
                <Image style={styles.sendoLogo} 
                source={require('../assets/images/sendo_logo.png')}/>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    sendoLogo: {
        width: 82,
        height: 22
    }
})