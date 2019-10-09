import React from 'react';
import {ScrollView, FlatList, StyleSheet} from 'react-native';
import ItemContentTrending from './ItemContentTrending';

const numColumns = 2;

export default class ContentTrending extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
        }
    }
    render() {
        return(
            <ScrollView contentContainerStyle={styles.scrollview}>
                <FlatList data={this.props.dataSourceTrending}
                        renderItem={({ item }) => (
                            <ItemContentTrending item={item} onPressTrendingItem={this.props.onPressTrendingItem}/>
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