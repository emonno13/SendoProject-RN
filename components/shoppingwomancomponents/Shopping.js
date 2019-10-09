import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Image, ScrollView, FlatList} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import ItemShoppingWoman from './ItemShoppingWoman';
import ContentRecommend from './ContentRecommend';
import ContentFashionWoman from './ContentFashionWoman';
import ContentTrending from './ContentTrending';

var isRecommendButton = false;
var isFashionButton = false;
var isTrendingButton = false;

const ProductForYouWomanData = [
    {
        CategoryID: 1,
        CategoryName: 'Thời trang nữ',
        Image: 'https://cdn.executiveponies.com/media/products/625x1000/w/i/wide_eyed_girl_maxi_dress_in_redtn.jpg'
    },
    {
        CategoryID: 2,
        CategoryName: 'Sức khỏe & làm đẹp',
        Image: 'http://bestcare.vn/media/catalog/product/cache/4/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/b/c/bc-son-mac-caitlyn-jenner-understanding.jpg'
    },
    {
        CategoryID: 3,
        CategoryName: 'Giày dép nữ',
        Image: 'https://sc01.alicdn.com/kf/HTB1l8bGSpXXXXbeXpXXq6xXFXXXe/red-micro-suede-sandal-orsebit-women-sandals.jpg_350x350.jpg'
    },
    {
        CategoryID: 4,
        CategoryName: 'Mẹ và bé',
        Image: 'https://bota.vn/wp-content/uploads/2018/11/bg3.jpg'
    },
]


export default class Shopping extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ProductForYouWomanData,
            isRecommendButton: false,
            isFashionButton: false,
            content: this.props.content,
            isOnPressWomanRecommend: this.props.isOnPressWomanRecommend,
            isOnPressWomanFashion: this.props.isOnPressWomanFashion,
            isOnPressWomanTrending: this.props.isOnPressWomanTrending,
            categoryID: this.props.categoryID,
            test: false,
            isLoading: true,
            search: '',
            dataSourceRecommend: this.props.dataSourceRecommend
        }
        this.arrayholder = [];
        
        console.log(this.props.dataSourceFashion);
        console.log(this.props.dataSourceRecommend);
        console.log(this.props.dataSourceTrending);
        console.log(this.props.content);
    }

    componentDidMount() {
        console.log("Render");
    }
    
    onRecommendButton = () => {
        isRecommendButton = true;
        if (isRecommendButton === true) {
            this.setState({
                content: <ContentRecommend dataSourceRecommend={this.props.dataSourceRecommend} onPressRecommendItem={this.props.onPressShoppingWomanItem}/>,
            })
        } 
    }

    onShoppingButton = () => {
        isFashionButton = true;
        if (isFashionButton === true) {
            this.setState({
                content: <ContentFashionWoman dataSourceFashion={this.props.dataSourceFashion} onPressFashionItem={this.props.onPressShoppingWomanItem}/>
            })
        } 
    }
    onTrendingButton = () => {
        isTrendingButton = true;
        if (isTrendingButton === true) {
            this.setState({
                content: <ContentTrending dataSourceTrending={this.props.dataSourceTrending} onPressTrendingItem={this.props.onPressShoppingWomanItem}/>
            })
        } 
    }

    search = text => {
        console.log(text);
      };
      clear = () => {
        this.search.clear();
      };
      SearchFilterFunction(text) {
        const newData = this.arrayholder.filter(function (item) {
          const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        this.setState({
          dataSourceRecommend: newData,
          search: text,
        });
      }
    
    render() {
        
        actionOnRow = (item) => {
            if(item.CategoryID === 1) {
                this.setState({
                    content: <ContentFashionWoman dataSourceFashion={this.state.dataSourceFashion}/>
                })
            }
        }
        
        return(
            <View style={styles.shoppingWrapper}>
                <View style={styles.view1}> 
                    <View style={styles.shoppingTop}>
                        <Text style={styles.shoppingText}>Dạo siêu chợ</Text>
                        <TouchableOpacity style={styles.allCategoryButton} onPress={this.props.onCategoryButton}>
                            <Text style={styles.allCategoryText}>Tất cả danh mục</Text>
                            <AntDesign name="right" style={styles.icon} color='#D90429' />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.line}></View>
                    <ScrollView contentContainerStyle={styles.scrollview} horizontal={true}>
                        <TouchableOpacity style={styles.recommendButton} onPress={() => this.onRecommendButton()}>
                            <Image style={styles.recommendImage}
                                source={require('../../assets/images/common_category_reccomend.jpg')} />
                            <Text style={styles.RecommendText}>Đề cử</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.shoppingButton} onPress={() => this.onShoppingButton()}>
                            <Image style={styles.shoppingImage}
                                source={{ uri: 'https://englishtown.edu.vn/wp-content/uploads/2019/03/tu-vung-tieng-anh-mua-sam.jpg' }} />
                            <Text style={styles.shopping1Text}>Dạo chợ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.trendingButton} onPress={() => this.onTrendingButton()}>
                            <Image style={styles.trendingImage}
                                source={{ uri: 'https://www.10trending.com/wp-content/uploads/2018/10/Best-Top-100-Trending-Products-Sell-Online-2019.png' }} />
                            <Text style={styles.trendingText}>Xu hướng</Text>
                        </TouchableOpacity>
                        <FlatList data={this.state.data}
                            renderItem={({ item }) => (
                                <ItemShoppingWoman item={item} onPressItemWoman={() => actionOnRow(item)} />
                            )}
                            horizontal={true} 
                            keyExtractor={(item,index) => index.toString()}/>
                    </ScrollView>
                </View>
                <View style={styles.view2}>
                    {this.state.content}
                </View>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    view1: {
        flex: 0.3,
    },
    view2: {
        flex: 0.7,
    },
    shoppingWrapper: {
        marginTop: 8,
        flex: 1,
    },
    shoppingTop: {
        flexDirection: 'row',
        marginLeft: 8
    },
    shoppingText: {
        fontSize: 18,
        lineHeight: 21,
        fontFamily: 'Roboto'
    },
    allCategoryButton: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    allCategoryText: {
        fontSize: 14,
        lineHeight: 16,
        fontFamily: 'Roboto',
        color: '#D90429',
        marginLeft: 98
    },
    icon: {
        marginLeft: 8
    },
    line: {
        marginTop: 4,
        width: 342,
        marginLeft: 8,
        borderBottomWidth: 0.5,
        borderBottomColor: '#8D99AE',
    },
    scrollview: {
        marginTop: 7,
        marginLeft: 8,
    },
    recommendButton: {
        alignItems: 'center'
    },
    recommendImage: {
        width: 64,
        height: 64
    },
    RecommendText: {
        fontFamily: 'Roboto',
        fontSize: 12,
        lineHeight: 14,
        padding: 4
    },
    shoppingButton: {
        alignItems: 'center',
        marginLeft: 4
    },
    shoppingImage: {
        width: 64,
        height: 64
    },
    shopping1Text: {
        fontFamily: 'Roboto',
        fontSize: 12,
        lineHeight: 14,
        padding: 4
    },
    trendingButton: {
        alignItems: 'center',
        marginLeft: 4
    },
    trendingImage: {
        width: 64,
        height: 64
    },
    trendingText: {
        fontFamily: 'Roboto',
        fontSize: 12,
        lineHeight: 14,
        padding: 4
    }
})