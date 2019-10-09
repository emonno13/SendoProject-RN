import React from 'react';
import {TouchableOpacity, StyleSheet, Text,Image} from 'react-native';

export default function ItemCategory(props) {
    return(
        <TouchableOpacity style={styles.itemCategory}>
            <Image source={{uri: props.item.belong_cate_lvl1_image}}
                style={styles.image}
               // resizeMode='contain'
                />
            <Text style={styles.nameCategory}>
                {props.item.belong_cate_lvl1_name}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 170,
        height: 144,
        maxWidth: 184,
        maxHeight: 144
        
    },
    itemCategory: {
        flex : 1,
        marginTop: 4,
        marginLeft: 4,
        justifyContent : 'center',
        alignItems: 'center'
    },
    nameCategory:{
        justifyContent : 'center',
        alignItems: 'center'
    }
})