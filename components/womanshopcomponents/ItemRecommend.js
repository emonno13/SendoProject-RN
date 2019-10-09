import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';

export default function ItemRecommend(props) {
    return(
        <TouchableOpacity style={styles.itemWrapper} onPress={() => props.onPressItem(props.item)}>
            <Image source={{uri: props.item.image_url}} style={styles.image}/>
            <View style={styles.textWrapper}>
                <Text style={styles.price}>{props.item.price}</Text>
                <Text style={styles.productName}>{props.item.name}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    itemWrapper: {
        marginTop: 8,
        flexDirection: 'row',
        paddingLeft: 16,
        paddingRight: 120
    },
    image: {
        width: 112,
        height: 112
    },
    textWrapper: {
        marginLeft: 16,
        flexDirection: 'column'
    },
    price: {
        fontSize: 18,
        lineHeight: 21,
        fontFamily: 'Roboto',
        color: 'red'
    },
    productName: {
        fontSize: 14,
        lineHeight: 16,
        fontFamily: 'Roboto',
        marginTop: 3,
    }
})