import React from 'react';
import {ScrollView, FlatList, StyleSheet} from 'react-native';
import ItemContentFashionWoman from './ItemContentFashionWoman';

const numColumns = 2;

export default class ContentFashionWoman extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
        }
    }
    render() {
        return(
            <ScrollView contentContainerStyle={styles.scrollview}>
                <FlatList data={this.props.dataSourceFashion}
                        renderItem={({ item }) => (
                            <ItemContentFashionWoman item={item} //onPressShoppingItem={this.props.onPressShoppingItem}
                            onPressFashionItem={this.props.onPressFashionItem}/>
                        )}
                        numColumns={numColumns}
                        keyExtractor={(item,index) => index.toString()}/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollview: {
        backgroundColor: '#F2F2F2'
    }
})