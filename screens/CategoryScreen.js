import React, { Component } from 'react';
import { View, StyleSheet, FlatList,Image } from 'react-native';
import { CategoryData } from '../constants/CategoryData';
import ItemCategory from '../components/ItemCategory';
import LogoTitle from '../components/LogoTitle';

const numColumns = 2;

export default class CategoryScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: CategoryData
        };
    }
    
    render() {
        const dataSourceCategory = this.props.navigation.getParam('dataSourceCategory');
        return (

            <View style={styles.container}>

                
                <FlatList data={dataSourceCategory}
                    renderItem={({ item }) => (
                        <ItemCategory item={item} onPressItem={() => { this.onPressActionRow(item) }} />
                    )}
                    numColumns={numColumns}
                    keyExtractor={(item,index) => index.toString()}/>



            </View>

        );
    }
}

CategoryScreen.navigationOptions = props => {
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
        headerTintColor: 'white',
    }
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    header: {
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    buttonBack: {
        backgroundColor: 'red',
        width: 50,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginLeft: 2,
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.7,
        shadowRadius: 16.00,
        elevation: 24,
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
    },
    headerText: { //chữ follow
        color: 'white',
        fontSize: 17,
        paddingLeft: 90,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '400'
    },
    //////////
    allProduct:{
        flex : 0.9,
        marginTop: 4,
        marginLeft: 12,
        marginRight: 16
    },
    headerTitle: {
        //marginLeft: 90
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },

})