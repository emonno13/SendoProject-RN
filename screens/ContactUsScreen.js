import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

export default class ContactUsScreen extends React.Component {
    render() {
        return(
            <View style={{flex: 1}}>
                <View style={styles.container}>
                    <MapView style={styles.map}
                    region={{
                    latitude: 10.753949,
                    longitude: 106.740442,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121
                    }}>
                        <Marker
                            coordinate={{
                                latitude: 10.753949,
                                longitude: 106.740442,
                            }}
                            title="Sendo Location"
                            description="Here is Sendo location" />
                    </MapView>
                </View>
                <View style={styles.addressWrapper}>
                    <Text style={styles.addressText}>Địa chỉ:</Text>
                    <Text>Tòa nhà FPT Tân Thuận, Lô 29B-31B-33B, Đường Tân Thuận, KCX Tân Thuận, Phường
                        Tân Thuận Đông, Quận 7, Tp.HCM.
                    </Text>
                    <Text style={styles.hotlineText}>Hotline:</Text>
                    <Text style={styles.hotlineRedText}>1900 6000</Text>
                </View>
            </View>
        );
    }
}

ContactUsScreen.navigationOptions = props => {
    return{
        headerTitle: "Contact us",
        headerBackground: (
          <Image
            style={{width: '100%', height: '100%'}}
            source={{uri: 'https://img.freepik.com/free-psd/abstract-background-design_1297-82.jpg?size=626&ext=jpg'}}
          />
        ),
        headerTintColor: 'white',
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 300,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    hotlineText: {
        marginTop: 10
    },
    hotlineRedText: {
        color: 'red'
    },
    addressWrapper: {
        marginTop: 310,
        marginLeft: 5,
        marginRight: 5
    }
})