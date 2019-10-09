import React from 'react';
import {View, Text, TouchableOpacity, AsyncStorage, StyleSheet, Image, Platform} from 'react-native';
import LogoTitle from '../components/LogoTitle';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import {AntDesign} from '@expo/vector-icons';
import * as action from '../action/index';
import {connect} from 'react-redux';



export default class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: this.props.infoUser,
            location: null,
            errorMessage: null,
        }
        console.log(this.state.userID);
    }
    onLogoutPress = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Indicator');
    }
    onAboutUsPress = () => {
        this.props.navigation.navigate('AboutUs')
    }
    onContactUsPress = () => {
        this.props.navigation.navigate('ContactUs');
    }
    componentWillMount() {
        
        console.log("i got info here: ", this.props.infoUser)
        if (Platform.OS === 'android' && !Constants.isDevice) {
          this.setState({
            errorMessage: 'Try it on your real device!',
          });
        } else {
          this._getLocationAsync();
        }
      }
    
      _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
          this.setState({
            errorMessage: 'Permission to access location was denied',
          });
        }
    
        let location = await Location.getCurrentPositionAsync({});
        this.setState({ location });
      };
    
    render() {
        const data = this.props.navigation.getParam('increaseCount');
        //const name = this.props.navigation.getParam('userID', 'Peter');
        //console.log(data);
        
        let text = 'Waiting..';
        if (this.state.errorMessage) {
            text = this.state.errorMessage;
        } else if (this.state.location) {
            text = JSON.stringify(this.state.location);
        }
        return (
            <View style={styles.container}>
                <View style={styles.profileWrapper}>
                    <Image style={styles.imageProfile}
                    source={require('../assets/images/avatar.png')}/>
                    <View style={styles.profile}>
                        <Text style={styles.userName}>Sang Cao</Text>
                        <TouchableOpacity style={styles.logoutButton} onPress={() => this.onLogoutPress()}>
                            <Text style={styles.logoutText}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.information}>
                    <Text style={styles.accountInformationText}>ACCOUNT INFORMATIONS</Text>
                    <View style={styles.userIDWrapper}>
                        <Text style={styles.userID}>User ID</Text>
                        <Text>123456789</Text>
                    </View>
                    <View style={styles.userNameAccountWrapper}>
                        <Text style={styles.userNameAccount}>Name</Text>
                        <Text>Sang Cao</Text>
                    </View>
                    <View style={styles.phoneWrapper}>
                        <Text style={styles.phone}>Phone</Text>
                        <Text>0584246112</Text>
                    </View>
                    <View style={styles.emailWrapper}>
                        <Text style={styles.email}>email</Text>
                        <Text>caobathanhsang@gmail.com</Text>
                    </View>
                    <View style={styles.locationWrapper}>
                        <Text style={styles.location}>Location</Text>
                        <Text>{text}</Text>
                    </View>
                </View>
                <View style={styles.aboutContactUs}>
                    <TouchableOpacity style={styles.aboutUsButton} onPress={() => this.onAboutUsPress()}>
                        <Text style={styles.aboutUsText}>About us</Text>
                        <AntDesign name="right" style={styles.icon} color='gray'/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.contactUsButton} onPress={() => this.onContactUsPress()}>
                        <Text style={styles.contactText}>Contact us</Text>
                        <AntDesign name="right" style={styles.icon} color='gray'/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
} 

ProfileScreen.navigationOptions = props => {
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
const mapStateToProps = state => {
    return{
      infoUser: state.infoReducer
    }
  }

//export default connect(mapStateToProps)(ProfileScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2'
    },
    logoutButton: {
        
    },
    logoutText: {
        padding: 8,
        fontSize: 15,
        fontWeight: 'bold',
        color: 'red'
    },
    headerTitle: {
        //marginLeft: 90
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    profileWrapper: {
        flex: 0.25,
        padding: 25,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    information: {
        flex: 0.5,
        backgroundColor: 'white',
        marginTop: 10
    },
    aboutContactUs: {
        flex: 0.25,
        marginTop: 10,
        backgroundColor: 'white',
    },
    imageProfile: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: 'gray',
        borderWidth: 1
    },
    userName: {
        fontSize: 35,
        fontWeight: 'bold',
        marginTop: 5
    },
    logoutText: {
        color: 'red',
        fontSize: 15
    },
    logoutButton: {
        marginTop: 18
    },
    profile: {
        marginLeft: 20,
    },
    accountInformationText: {
        marginTop: 8,
        marginLeft: 25,
        fontWeight: 'bold'
    },
    userNameAccountWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 25,
        marginRight: 25
    },
    userNameAccount: {
        color: 'gray'
    },
    userIDWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 25,
        marginRight: 25
    },
    userID: {
        color: 'gray'
    },
    phoneWrapper : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 25,
        marginRight: 25
    },
    phone: {
        color: 'gray'
    },
    emailWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 25,
        marginRight: 25
    },
    email: {
        color: 'gray'
    },
    locationWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 25,
        marginRight: 25
    },
    location: {
        color: 'gray'
    },
    aboutUsButton: {
        marginTop: 5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginLeft: 25,
        marginRight: 25
    },
    contactUsButton: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginLeft: 25,
        marginRight: 25
    },
    aboutUsText: { 
        color: 'gray'
    },
    contactText: {
        color: 'gray'
    }
})
// function mapStateToProps(state) {
//     return {myValue: state.email}
// }

// export default connect(mapStateToProps)(ProfileScreen)