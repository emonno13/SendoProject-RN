import React from 'react';
import {View, Text, Button, ScrollView, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {NavigationActions, DrawerActions} from 'react-navigation';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default class Drawer extends React.Component {
    navigateToScreen = (route) => () => {
        const navigateActions = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateActions);
        this.props.navigation.dispatch(DrawerActions.closeDrawer());
    }

    render() {
        return (
            <View style={styles.drawerWrapper}>
                <View style={styles.profile}>
                    <Image style={styles.avatar} source={require('../assets/images/avatar.png')}/>
                    <Text style={styles.nameUser}>Guest</Text>
                </View>
                <View style={styles.advertisementWrapper}>
                    <Image style={styles.advertisement} source={require('../assets/images/sendoquangcao.jpg')}/>
                </View>
                <ScrollView contentContainerStyle={styles.scrollview}>      
                    <TouchableOpacity style={styles.shopButton} onPress={this.navigateToScreen('Shop')}>
                        <Ionicons 
                            name="md-home" size={30}/>
                        <Text style={styles.shopText}>HOME</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.newsButton} onPress={this.navigateToScreen('News')}>
                        <FontAwesome
                            name="newspaper-o" size={21} />
                        <Text style={styles.newsText}>NEWS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.contactButton} onPress={this.navigateToScreen('ContactUs')}>
                        <AntDesign
                            name="contacts" size={24} />
                        <Text style={styles.contactText}>CONTACT US</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.aboutUsButton} onPress={this.navigateToScreen('AboutUs')}>
                        <AntDesign
                            name="questioncircleo" size={25} />
                        <Text style={styles.aboutUsText}>ABOUT US</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.loginButton}>
                        <MaterialCommunityIcons
                            name="login" size={26} />
                        <Text style={styles.loginText}>LOGIN</Text>
                    </TouchableOpacity>
                    <Text style={styles.categoryText}>CATEGORY</Text>
                </ScrollView>
            </View>
            
        )
    }
} 

Drawer.propTypes = {
    navigation: PropTypes.object
};

const styles = StyleSheet.create({
    drawerWrapper: {
        flexDirection: 'column',
        flex: 1
    },
    profile: {
        marginTop: 30,
        marginLeft: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 25
    },
    nameUser: {
        fontWeight: 'bold',
        marginLeft: 5,
        fontSize: 20
    },
    advertisementWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        padding: 5,
        marginBottom: 13
    },
    advertisement: {
        width: '100%',
        height: 130,
        resizeMode: 'stretch'
    },
    scrollview: {
        marginLeft: 20,
        marginRight: 5,
        marginTop: 12
    },
    shopButton: {
        width: '100%',
        height: 25,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 3
    },
    shopText: {
        marginLeft: 30
    },
    newsButton: {
        width: '100%',
        height: 25,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 3,
        marginTop: 30
    },
    newsText: {
        marginLeft: 30
    },
    contactButton: {
        width: '100%',
        height: 25,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 3,
        marginTop: 30
    },
    contactText: {
        marginLeft: 30
    },
    aboutUsButton: {
        width: '100%',
        height: 25,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 3,
        marginTop: 30
    },
    aboutUsText: {
        marginLeft: 30
    },
    loginButton: { 
        width: '100%',
        height: 25,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 3,
        marginTop: 30
    },
    loginText: {
        marginLeft: 30
    },
    categoryText: {
        fontWeight: 'bold',
        marginTop: 35
    },
    button: {
        backgroundColor: 'red',
        width: 110,
        height: 130,
        flexDirection: 'row'
    }
})