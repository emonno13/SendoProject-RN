import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ItemFashionWoman from './ItemFashionWoman';
import {AntDesign} from '@expo/vector-icons';


const numColumns = 3;

export default class FashionWoman extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }
    render() {
        return(
            <View style={styles.fashionWomanWrapper}>
                <Text style={styles.fashionWomanText}>Xu hướng</Text>
                <View style={styles.container}>
                    <FlatList data={this.props.data.slice(0, 6)}
                        renderItem={({ item }) => (
                            <ItemFashionWoman item={item} onPressItem={this.props.onPressItem}/>
                        )}
                        numColumns={numColumns}
                        keyExtractor={(item,index) => index.toString()} />
                </View> 
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
    fashionWomanWrapper: {
        marginTop: 4,
        backgroundColor: 'white'
    },
    fashionWomanText: {
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
    container: {
        marginTop: 4,
        marginLeft: 12,
        marginRight: 16
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