import React from 'react';
import { Text, View, Image, StyleSheet,TouchableOpacity,Picker, ScrollView, ImageBackground } from 'react-native';
import ColorOption from '../components/ColorOption';
import LogoTitle from '../components/LogoTitle';


export default function ProductDetailScreen(props) {
    const data = props.navigation.getParam('data');
    console.log("data");
    console.log(data);
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.imageView}>
                <Image
                    style={styles.imageDetail}
                    source={{ uri: data.image_url }}
                />
            </View>

            <View style={styles.titleView}>
                <Text style={styles.textTitle}>{data.name}</Text>
                <Text style={styles.textPrice}>{data.price}</Text>
            </View>

            <View style={styles.colorOption}>
                <ColorOption/>
            </View>

            <View style={styles.productInfo} >
                <Text style={styles.titleInfo}>Chi tiết sản phẩm</Text>
                <Text style={styles.scriptInfo}>
                Shop chuyên bán các sản phẩm thời trang nam, thời trang nữ, giày dép,
                 đồ lót, đồ ngủ, đồ bơi,túi xách, balo các loại. 
                 Các sản phẩm đa dạng được lựa chọn tỉ mỉ, cẩn thận về kiểu dáng và mẫu mã phù hợp 
                 với nhiều lứa tuổi phái đẹp. Nhiều mẫu thiết kế tâm huyết không những đẹp mắt, 
                 hợp gu với mọi người mà sản phẩm còn có nhiều tính năng tiện ích, chất liệu cao cấp.
                </Text>
            </View>
            <TouchableOpacity style={styles.visitShop}>
            <Image
                    style={styles.imageShop}
                    source={{ uri: 'https://miro.medium.com/max/2400/0*Q_OW5YQ2ZfxZLn6H.png' }}
                />
                <View  style={styles.infoShop}>
                    <Text style={styles.nameShop}>{data.shop_name}</Text>
                    <Text style={styles.localShop}>TP. Ho Chi Minh</Text>
                </View>
 
            </TouchableOpacity>
            <View style={styles.footer} >
                    <TouchableOpacity onPress={()=>alert('Đã thêm vào giỏ hàng')}>
                        <ImageBackground 
                            source={{
                            uri:'http://www.clker.com/cliparts/h/4/P/y/n/z/orange-rectangle-button-md.png'}} 
                            style={styles.buttonFooter}
                            >
                            <Text style={styles.textFooter}>THÊM VÀO GIỎ HÀNG</Text>
                        </ImageBackground>

                    </TouchableOpacity> 
                    <TouchableOpacity>
                    <ImageBackground 
                            source={{
                            uri:'https://i.dlpng.com/static/png/273557_preview.png'}} 
                            style={styles.buttonFooter}>
                            <Text style={styles.textFooter}>MUA NGAY</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
        </ScrollView>
    );
}

ProductDetailScreen.navigationOptions = props => {
    return{
        headerTitle: "Product Detail",
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2F2F2'
    },
    imageView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',

    },
    imageDetail: {
        borderRadius: 15,
        width: 370,
        height: 400,
        maxWidth: 370,
        maxHeight: 400,
        marginVertical: 5,
        marginHorizontal: 100,
        resizeMode: 'contain',
        
    },
    titleView: {
        justifyContent: 'center',
        backgroundColor: 'white',
        width: '100%'
    },
    textTitle: {
        justifyContent: 'flex-start',
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        lineHeight: 22,
        marginLeft: '4%'
    },
    textPrice: {
        marginLeft: '4%',
        color: '#D90429',
        fontWeight: '600',
        fontSize: 24,
        borderRadius: 50,
    },
    colorOption: {
        marginTop: 5,
        marginHorizontal: 20,
        marginVertical: 5,
        width: '98%',
        backgroundColor: 'white',
        justifyContent: 'flex-start',
    },
    productInfo: {
        marginHorizontal: 20,
        marginVertical: 5,
        width: '98%',
        backgroundColor: 'white',
        justifyContent: 'flex-start',
    },
    titleInfo: {
        marginTop: '6.5%',
        marginBottom: '5%',
        marginLeft: '2%',
        textDecorationStyle: 'solid',
        fontStyle: 'italic',
        fontSize: 18,
        fontWeight: '100',
        lineHeight: 22,
    },
    scriptInfo: {
        marginLeft: '2%',
        marginBottom: '5%'
    },
    visitShop:{
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems:'center',
        marginLeft: '4%',
        marginHorizontal: 20,
        marginVertical: 5,
        backgroundColor:'white',
        width: '98%',
        height:70,
    },
    imageShop:{
        marginLeft:'4%',
        width:56,
        height:56
    },
    infoShop:{
        marginLeft:'2%',
    },
    nameShop:{
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize:14,
        lineHeight:22
    },
    localShop:{
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize:11,
        lineHeight:11
    },
    headerTitle: {
        //marginLeft: 90
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'stretch',
        borderTopColor :'black'
    },
    buttonFooter: {
        width: 200, 
        height: 50,
        maxWidth :200,
        justifyContent:'center',
        alignItems:'center',
    
    },
    textFooter: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    }
})