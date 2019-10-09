import React from 'react';
import {TouchableOpacity, Image, StyleSheet, Text} from 'react-native';

export default function ItemShoppingWoman(props) {
    return(
        <TouchableOpacity style={styles.itemWrapper} onPress={props.onPressItemWoman}>
            <Image style={styles.image} source={{uri: props.item.Image}}/>
            <Text style={styles.text}>{props.item.CategoryName}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    itemWrapper: {
        alignItems: 'center',
        width: 64,
        marginLeft: 4
    },
    image: {
        width: 64,
        height: 64
    },
    text: {
        fontFamily: 'Roboto',
        fontSize: 12,
        lineHeight: 14,
        padding: 4
    },
})