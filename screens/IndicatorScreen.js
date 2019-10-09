import React from 'react';
import {ActivityIndicator, AsyncStorage, StyleSheet, View} from 'react-native';

export default class IndicatorScreen extends React.Component {
    constructor(props) {
        super(props);
        this.loading();
    }
    loading = async () => {
        setTimeout(async () => {
            const token = await AsyncStorage.getItem('@token');
            console.log(token);
            
            if (token !== null) {
                this.props.navigation.navigate('Main');
            }
            else {
                this.props.navigation.navigate('Login');
            }
        }, 3000);
    }
    render() {
        return(
            <View style={styles.container}>
                <ActivityIndicator size="large" color="red"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})