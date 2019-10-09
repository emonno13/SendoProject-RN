import React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';

export default class LogoSendo extends React.Component {
    render() {
        return(
            <TouchableOpacity>
                <Image style={styles.sendoLogo} 
                source={require('../assets/images/sendo_vn_logo.jpg')}/>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    sendoLogo: {
        width: 150,
        height: 100
    }
})