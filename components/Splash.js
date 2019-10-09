import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class Splash extends React.Component {
    componentDidMount() {
        // setInterval(() => {
        //     this.props.navigation.navigate('Question');
        // }, 2000)
        setTimeout(() => {
            this.props.navigation.navigate('Indicator');
        }, 2500)
        //console.log('willmount');
    }
    render() {
        //console.log('render');
        return (
            <View style={styles.container}>
                <Image style={styles.image}
                    source={require('../assets/images/sendologo.jpg')}/>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    container: {

    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})