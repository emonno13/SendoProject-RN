import React from 'react';
import {View, StyleSheet, Image, ActivityIndicator} from 'react-native';
import ContentFashionWoman from '../components/shoppingwomancomponents/ContentFashionWoman';
import { SearchBar } from 'react-native-elements';

export default class ShoppingScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            loading: true,
            search: ''
        }
    }
    onPressButtonCategoryWomanTotal = () => {
        this.props.navigation.navigate("Category");
    }
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
              function () {
                this.arrayholder = responseJson;
              },
              console.log("test"),
              console.log(this.state.dataSource),
              console.warn(this.state.dataSource))
            })
            .catch(error => console.log(error)) //to catch the errors if any
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
          dataSource: newData,
          search: text,
        });
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
        return (
            <View style={styles.container}>
                <SearchBar
                    round
                    searchIcon={{ size: 24 }}
                    onChangeText={text => this.SearchFilterFunction(text)}
                    onClear={text => this.SearchFilterFunction('')}
                    placeholder="Looking for ..."
                    value={this.state.search}
                />
                <ContentFashionWoman dataSourceFashion={this.state.dataSource} onPressFashionItem={this.onPressShoppingWomanItem}/>
            </View>
        )
    }
}

ShoppingScreen.navigationOptions = props => {
    return{
        header: (
            <View style={styles.headerTitle}>
                
            </View>
        ),
        headerBackground: (
            <Image
              style={{width: '100%', height: '100%'}}
              source={{uri: 'https://img.freepik.com/free-psd/abstract-background-design_1297-82.jpg?size=626&ext=jpg'}}
            />
          ),
    }
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
    },
    headerTitle: {
        marginTop: 24
    },
    loading: { 
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    }
})