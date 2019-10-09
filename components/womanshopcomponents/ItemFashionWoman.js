import React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';

export default function ItemFashionWoman(props) {
    return(
        <TouchableOpacity style={styles.itemFashionWoman} onPress={() => props.onPressItem(props.item)}>
            <Image source={{uri: props.item.image_url}}
                style={styles.image}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 112,
        height: 112
    },
    itemFashionWoman: {
        marginTop: 4,
        marginLeft: 4
    }
})