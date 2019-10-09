import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button, Linking, ImageBackground,SafeAreaView, TouchableOpacityComponent, Image } from 'react-native';
import { Card } from 'react-native-elements';
import LogoTitle from '../components/LogoTitle';
export default class NewsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };
  }
  componentDidMount() {
    fetch("https://raw.githubusercontent.com/emonno13/jsontest/master/getSendoNews")
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({
          loading: false,
          dataSource: responseJson
        })
      })
      .catch(error => console.log(error))
  }
  render() {
    const onPress = url => {
      Linking.canOpenURL(url).then(supported => {
        if (supported) {
          Linking.openURL(url);
        } else {
          console.log(`Don't know how to open URL: ${url}`);
        }
      });
    };
    return (
      <SafeAreaView style={styles.container}>
         
        <ImageBackground
                style={styles.header}
                source={{uri:'https://images1.pixlis.com/background-image-vertical-lines-and-stripes-seamless-tileable-deep-pink-red-22rdh3.png'}}
              >
                <Text style={styles.textHeader}>New Articles</Text>
        </ImageBackground>
     
        <View style={styles.news}> 
          <ImageBackground
            style={{ width: '100%', height: '100%' }}
            source={{ uri: 'https://s3.envato.com/files/6f56359e-80bc-4c51-a4ea-d0f4a4f5fae4/inline_image_preview.jpg' }}>
            
            <FlatList
              data={this.state.dataSource}
              renderItem={({ item }) =>
                <Card title={item.TIEUDE} image={{ uri: item.IMG }}>
                  <Button title="Read more" backgroundColor="#03A9F4" onPress={() => onPress(item.LINK)} />
                </Card>

              }
              keyExtractor={(item, index) => index.toString()}
            />
          </ImageBackground>
        </View>

        <View style={styles.footer}>
            <TouchableOpacity onPress={() => onPress('https://www.sendo.vn/nhip-song/')} >
              <ImageBackground
                style={{ width: '100%', height: '100%',justifyContent:'center',alignItems:'center' }}
                source={{uri:'https://images1.pixlis.com/background-image-vertical-lines-and-stripes-seamless-tileable-deep-pink-red-22rdh3.png'}}
              >
                <Text style={styles.textHeader}>Go to Online !!</Text>
              </ImageBackground>
            </TouchableOpacity>
        </View>

      </SafeAreaView>
    );
  }
}

NewsScreen.navigationOptions = props => {
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
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.05,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'red'
  },
  textHeader:{
    color:'white',
    fontWeight:'bold',
    fontSize:20
  },
  news:{
    flex: 0.9
  },
  footer:{
    flex:0.05,
    justifyContent:'center'
  },
  headerTitle: {
    //marginLeft: 90
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
},
});
