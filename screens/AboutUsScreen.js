import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import LogoSendo from '../components/LogoSendo';

export default class AboutUsScreen extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <LogoSendo/>
                <Text style={styles.aboutText}>"Sendo là siêu ứng dụng mua sắm trực tuyến được bảo trợ bởi Tập đoàn FPT, kết nối 
                người mua và người bán trên toàn quốc. Xuất thân là một dự án Sàn thương mại điện tử do công 
                ty CP Dịch vụ trực tuyến FPT (FPT Online) phát triển, Sendo ra mắt người tiêu dùng vào tháng
                9/2012. Ngày 13/5/2014, Công ty CP Công Nghệ Sen Đỏ được thành lập trực thuộc Tập đoàn FPT,
                là đơn vị chủ quản Sendo"</Text>
            </View>
        );
    }
}

AboutUsScreen.navigationOptions = props => {
    return{
        headerTitle: "About us",
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
        flex: 1,
        alignItems: 'center'
    },
    aboutText: {
        marginLeft: 20,
        marginRight: 20
    }
})