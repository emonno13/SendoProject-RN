import React from 'react';
import {View, FlatList, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import ItemProductForYou from './ItemProductForYou';
import {AntDesign} from '@expo/vector-icons';


const numColumns = 2;

export default class ProductForYou extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemCount: 4
        }
    }
    
    render() {
        return(
            <View style={styles.productForYouWrapper}> 
                <Text style={styles.productForYouText}>Danh mục</Text>
                <View style={styles.container}>
                    <FlatList data={this.props.data.slice(0, 4)}
                    renderItem={({item}) => {
                        return(
                            <ItemProductForYou item={item}/>
                        )
                    }}
                    numColumns={numColumns}
                    keyExtractor={(item,index) => index.toString()}/>

                </View>
                <View style={styles.line}></View>
                <TouchableOpacity style={styles.seeMoreButton} onPress={this.props.onPressButton}>
                    <Text style={styles.seeMoreText}>Xem thêm</Text>
                    <AntDesign name="right" style={styles.icon} color='red'/>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    productForYouWrapper: {
        marginTop: 4,
        backgroundColor: 'white'
    },
    productForYouText: {
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
        flex: 1,
        flexDirection: 'row',
        marginLeft: 8,
        marginRight: 16
      },
      column: {
        flex: 1,
        flexDirection: 'column'
      },
      row: {
        flexDirection: 'row'
      },
      item: {
        flex: 1
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