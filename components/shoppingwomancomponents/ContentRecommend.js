import React from 'react';
import {ScrollView, FlatList, StyleSheet} from 'react-native';
import ItemContentRecommend from './ItemContentRecommend';

const numColumns = 2;

export default class ContentRecommend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            dataSource: []
        }
    }
    
    render() {
        return(
            <ScrollView contentContainerStyle={styles.scrollview}>
                <FlatList data={this.props.dataSourceRecommend}
                        renderItem={({ item }) => (
                            <ItemContentRecommend item={item} onPressRecommendItem={this.props.onPressRecommendItem}/>
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