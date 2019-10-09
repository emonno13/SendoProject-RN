import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {AntDesign} from '@expo/vector-icons';

export default class Banner extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return(
            <View style={styles.bannerWrapper}>
                <Text style={styles.bannerText}>Dạo chợ</Text>
                <FlatList data={this.props.data.slice(0, 1)}
                renderItem={({item}) => 
                    <TouchableOpacity style={styles.imageWrapper} onPress={this.props.onPressButton}>
                        <Image style={styles.image}
                            source={{ uri: item.image_url }} />
                    </TouchableOpacity>
                }
                keyExtractor={(item,index) => index.toString()}/>
                <View style={styles.line}></View>
                <TouchableOpacity style={styles.seeMoreButton} onPress={this.props.onPressButton}>
                    <Text style={styles.seeMoreText}>Xem thêm</Text>
                    <AntDesign name="right" style={styles.icon} color='red'/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 352,
        resizeMode: 'stretch'
    },
    imageWrapper: {
        justifyContent: 'center',
        alignItems: 'center',  
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 8
    },
    bannerWrapper: {
        marginTop: 4,
        backgroundColor: 'white'
    },
    bannerText: { 
        fontSize: 18,
        lineHeight: 21,
        fontFamily: 'Roboto',
        marginTop: 8,
        marginLeft: 16,
        color: '#2B2D42'
    },
    line: {
        marginTop: 8,
        width: 328,
        marginLeft: 16,
        borderBottomWidth: 0.5,
        borderBottomColor: '#8D99AE',
    },
    seeMoreButton: {
        flexDirection: 'row',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 8,
        alignItems: 'center',
        marginBottom: 8
    },
    seeMoreText: {
        fontSize: 14,
        lineHeight: 16,
        fontFamily: 'Roboto',
        color: 'red',
        fontWeight: 'bold'
    },
    icon: {
        marginLeft: 240
    }
})