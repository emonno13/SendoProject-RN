import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet, TextInput, ActivityIndicator} from 'react-native';
import ShopWomanScreen from './ShopWomanScreen';
import {FontAwesome} from '@expo/vector-icons';
import {NavigationActions, StackActions} from 'react-navigation';
import LogoTitle from '../components/LogoTitle';
import ContentRecommend from '../components/shoppingwomancomponents/ContentRecommend';
import ContentFashionWoman from '../components/shoppingwomancomponents/ContentFashionWoman';
import ContentTrending from '../components/shoppingwomancomponents/ContentTrending';
import BackgroundCarousel from '../components/BackgroundCarousel';

const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'ShopWoman' })],
})

var isOnPress = false;
export default class ShopScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        content: <View></View>,
        isOnPressRecommend: false,
        isOnPressFashion: false,
        isOnPressTrending: false,
        dataSource: [],
        dataSource1: [],
        dataSource2: [],
        dataSource3: [],
        loading: true,
      }
    };
    
  componentDidMount() {
    function shuffle(arra1) {
      var ctr = arra1.length, temp, index;

      // While there are elements in the array
      while (ctr > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * ctr);
        // Decrease ctr by 1
        ctr--;
        // And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
      }
      return arra1;
    }

    // Dạo chợ
    fetch("https://raw.githubusercontent.com/emonno13/jsontest/master/user_rec_50_items.json?fbclid=IwAR0GteWs5w5hPBJxa74BalGo3S0sY2B2b1Fhj07giLoXzQ9clGNFsUjnN3k")
      .then(response => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          loading: false,
          dataSource: shuffle(responseJson)
        },
        console.log("test"),
        console.log(this.state.dataSource),
        console.warn(this.state.dataSource))
      })
      .catch(error => console.log(error)) //to catch the errors if any   

    // Đề cử
    fetch("https://raw.githubusercontent.com/emonno13/jsontest/master/user_rec_50_items.json?fbclid=IwAR0GteWs5w5hPBJxa74BalGo3S0sY2B2b1Fhj07giLoXzQ9clGNFsUjnN3k")
      .then(response => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          loading: false,
          dataSource1: shuffle(responseJson)
        })
      })
      .catch(error => console.log(error)) //to catch the errors if any  

    // Danh mục
    fetch("https://raw.githubusercontent.com/emonno13/jsontest/master/getCategory.json?fbclid=IwAR0rgTZ1BIgH5nsICONe_xEZU-Ocs_iy-wecip0l7qO0Gq5-Ast4e_JdWYM")
      .then(response => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          loading: false,
          dataSource2: shuffle(responseJson)
        },
        console.log("Test2"),
        console.log(this.state.dataSource2))
      })
      .catch(error => console.log(error)) //to catch the errors if any    

    // Xu hướng
    fetch("https://raw.githubusercontent.com/emonno13/jsontest/master/most_popular_items_48h.json")
      .then(response => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          loading: false,
          dataSource3: shuffle(responseJson)
        },
        console.log("Test"),
        console.log(this.state.dataSource3))
      })
      .catch(error => console.log(error)) //to catch the errors if any
  }

  onPressItem = (item) => {

    this.props.navigation.navigate('ProductDetail', {data: item});
  }
    
  onPressShoppingWomanItem = (item) => {
    this.props.navigation.navigate('ProductDetail', {data: item});
  }

    render() {
      if (this.state.loading) {
        return (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="red" />
          </View>
        )
      }



      onPressRecommendTotal = async () => {
        await this.setState({
          content: <ContentRecommend dataSourceRecommend={this.state.dataSource1} onPressRecommendItem={this.onPressShoppingWomanItem}/>

        })

        this.props.navigation.navigate('ShoppingWoman', {
          dataSource: {
            dataSourceRecommend: this.state.dataSource1,
            dataSourceFashion: this.state.dataSource,
            dataSourceTrending: this.state.dataSource3,
            dataSourceCategory: this.state.dataSource2
          },
          content: this.state.content,
          isOnPressRecommend: this.state.isOnPressRecommend});

      }



      onPressFashionTotal = async () => {
        await this.setState({
          isOnPressFashion: true
        })
        if (this.state.isOnPressFashion === true) {
          await this.setState({
            content: <ContentFashionWoman dataSourceFashion={this.state.dataSource} onPressFashionItem={this.onPressShoppingWomanItem}/>
          })
        }
        this.props.navigation.navigate('ShoppingWoman', {
          dataSource: {
            dataSourceFashion: this.state.dataSource,
            dataSourceRecommend: this.state.dataSource1,
            dataSourceTrending: this.state.dataSource3,
            dataSourceCategory: this.state.dataSource2
          },
          content: this.state.content,
          isOnPressFashion: this.state.isOnPressFashion});
      }



      onPressTrendingTotal = async () => {

        await this.setState({
          content: <ContentTrending dataSourceTrending={this.state.dataSource3} onPressTrendingItem={this.onPressShoppingWomanItem}/>
        })
        this.props.navigation.navigate('ShoppingWoman', {
          dataSource: {
            dataSourceTrending: this.state.dataSource3,
            dataSourceFashion: this.state.dataSource,
            dataSourceRecommend: this.state.dataSource1,
            dataSourceCategory: this.state.dataSource2
          },
          content: this.state.content,
          isOnPressTrending: this.state.isOnPressTrending});
      }



      onPressCategoryTotal = () => {
        this.props.navigation.navigate('Category', {dataSourceCategory: this.state.dataSource2});
      }
      return (
        <View style={styles.container}>
          <BackgroundCarousel style={styles.view1}/>
          <ShopWomanScreen style={styles.view2}
            onPressItem={this.onPressItem}
            dataSource={this.state.dataSource}
            dataSource1={this.state.dataSource1}
            dataSource2={this.state.dataSource2}
            dataSource3={this.state.dataSource3}
            onPressRecommend={() => onPressRecommendTotal()}
            onPressFashion={() => onPressFashionTotal()}
            onPressTrending={() => onPressTrendingTotal()}
            onPressCategory={() => onPressCategoryTotal()} />
          
          
        </View>
      )
    }
    
    
} 
ShopScreen.navigationOptions = props => { 
  return {
      //title: "Shop",
      headerTitle: <LogoTitle/>,
      headerRight: (
        <View style={styles.headerRight}>
            <TouchableOpacity style={styles.searchButton}>
              <FontAwesome style={styles.icon} name="search" size={23} color="red"/>
            </TouchableOpacity>
            <TextInput style={styles.textInput} placeholder="Tìm kiếm tại Sendo"/>
        </View>
        ),  
      headerLeft: () => {
        return (
          <TouchableOpacity onPress={props.navigation.openDrawer}>
            <Image
              style={styles.hamberger}
              source={require('../assets/images/hamburger_drawer.jpg')}
            />
          </TouchableOpacity>
        );
      },
      headerBackground: (
        <Image
          style={{width: '100%', height: '100%'}}
          source={{uri: 'https://img.freepik.com/free-psd/abstract-background-design_1297-82.jpg?size=626&ext=jpg'}}
        />
      ),
    };
  };

  const styles = StyleSheet.create({
      hamberger: {
          width: 30,
          height: 30,
          marginLeft: 10,
      },
      container: {
        flex: 1,
      },
      view1: {
        flex: 0.3,
      },
      view2: {
        flex: 0.7
      },
      button1: {
          marginRight: 100
      },
      textInput: {
        flex: 1,
        padding: 2,
        backgroundColor: '#fff',
        color: '#424242',
        width: 160,
        borderRadius: 15
      },
      headerRight: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginRight: 10,
        borderRadius: 15
      },
      searchButton: {
        marginRight: 5
      },
      sendoLogo: {
        width: 50,
        height: 20
      },
      icon: {
        padding: 2,
      },
      loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
  })