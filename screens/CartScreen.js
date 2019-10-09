import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import LogoTitle from '../components/LogoTitle';

export default class CartScreen extends React.Component {
    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{color: 'black'}}>CartScreen</Text>
            </View>
        )
    }
} 
CartScreen.navigationOptions = props => {
    return{
        headerTitle: (
            <View style={styles.headerTitle}>
                <LogoTitle/>
            </View>
        ),
        headerBackground: (
            <Image
              style={{width: '100%', height: '100%'}}
              source={{uri: 'https://img.freepik.com/free-psd/abstract-background-design_1297-82.jpg?size=626&ext=jpg'}}
            />
          ),
    }
}

const styles = StyleSheet.create({
    headerTitle: {
        //marginLeft: 90
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
})