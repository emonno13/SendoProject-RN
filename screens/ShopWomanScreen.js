import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Banner from '../components/womanshopcomponents/Banner';
import Recommend from '../components/womanshopcomponents/Recommend';
import ProductForYou from '../components/womanshopcomponents/ProductForYou';
import FashionWoman from '../components/womanshopcomponents/FashionWoman';

export default class ShopWomanScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <ScrollView contentContainerStyle={styles.scrollview}>
                <Banner data={this.props.dataSource} onPressButton={this.props.onPressFashion}/>
                <Recommend data={this.props.dataSource1} onPressButton={this.props.onPressRecommend} onPressItem={this.props.onPressItem}/>
                <ProductForYou data={this.props.dataSource2} onPressButton={this.props.onPressCategory}/>
                <FashionWoman data={this.props.dataSource3} onPressButton={this.props.onPressTrending} onPressItem={this.props.onPressItem}/>
            </ScrollView>
            
        );
    }
}

const styles = StyleSheet.create({
    scrollview: {
        backgroundColor: '#F2F2F2',
    }
})