import React, { Component } from 'react';
import { View, Text,StyleSheet,ScrollView,Dimensions,Image } from 'react-native';

const DEVICE_WIDTH = Dimensions.get("window").width;
const images = [ 
    "http://media3.scdn.vn/img3/2019/10_1/vIJPr4.png",
    "http://media3.scdn.vn/img3/2019/10_4/Na5iur.jpg",
    "http://media3.scdn.vn/img3/2019/10_3/HvKmMv.jpg",
    "http://media3.scdn.vn/img3/2019/10_3/RRBNPI.jpg",
    "http://media3.scdn.vn/img3/2019/10_3/gvV6qj.png",
    "http://media3.scdn.vn/img3/2019/10_4/PcG79m.png",
    "http://media3.scdn.vn/img3/2019/10_4/GlkX58.jpg"
  ];
export default class BackgroundCarousel extends Component {
scrollRef = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
        selectedIndex:0
    };
  }

  componentDidMount = () =>{
      setInterval(() => {
          this.setState(prev =>({selectedIndex: 
            prev.selectedIndex === images.length -1 ? 0 :prev.selectedIndex +1
        }), 
        ()=>{
            this.scrollRef.current.scrollTo({
                animated: true,
                y:0,
                x: DEVICE_WIDTH * this.state.selectedIndex
            })
          })
      }, 2000);
  }
  setSelectedIndex = event => {
      //width of ViewSize
      const viewSize = event.nativeEvent.layoutMeasurement.width;
      //get current position of Scrollview
      const contentOffset = event.nativeEvent.contentOffset.x;
      const selectedIndex = Math.floor(contentOffset / viewSize)
      this.setState({selectedIndex});
  }

  render() {
      //const {images} = this.props;
      const {selectedIndex} = this.state;
    return (
      <View style={{marginTop: 5, height:'18%',width:'100%'}}>
        <ScrollView 
        horizontal 
        pagingEnabled 
        onMomentumScrollEnd={this.setSelectedIndex}
        ref={this.scrollRef}
        >
            {images.map(image =>(
                <Image
                key={image}
                source={{uri:image}}
                style={styles.backgroundImage}
                />
            ))}
        </ScrollView>
        <View style={styles.circleDiv}>
            {images.map((image,i) =>(
                <View
                    key={image}
                    style={[styles.whiteCircle,{opacity:i===selectedIndex ? 0.5 : 1}]}
                />
            ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    backgroundImage:{
        height:'100%',
        width:DEVICE_WIDTH,
        resizeMode:'contain'
    },
    circleDiv:{
        position:'absolute',
        bottom:15,
        height:10,
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    whiteCircle:{
        width: 6,
        height: 6,
        borderRadius:3,
        margin:5,
        backgroundColor:'#fff'
    }
})