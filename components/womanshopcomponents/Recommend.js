import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import {NavigationActions, StackActions} from 'react-navigation';
import {AntDesign} from '@expo/vector-icons';
import ItemRecommend from './ItemRecommend';

const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'ShopWomanScreen' })],
})

export default class Recommend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSeeMoreRecommendPress: false
        }
    }
    
    
    render() {

        return(
            <View style={styles.recommendWrapper}>
                <Text style={styles.recommendText}>Sản phẩm dành cho bạn</Text>
                <FlatList
                    data={this.props.data.slice(0, 3)}
                    renderItem={({ item }) => {
                        return(
                            <ItemRecommend item={item} onPressItem={this.props.onPressItem}/>
 
                        );
                    }}
                    keyExtractor={(item,index) => index.toString()}
                />
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
    recommendWrapper: {
        marginTop: 4,
        backgroundColor: 'white'
    },
    recommendText: {
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