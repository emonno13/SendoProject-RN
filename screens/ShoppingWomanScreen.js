import React from 'react';
import { View, StyleSheet, Image} from 'react-native';
import Shopping from '../components/shoppingwomancomponents/Shopping';


export default class ShoppingWomanScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      dataSource1: [],
      dataSource2: [],
      dataSource3: []
    }
  }


  onPressShoppingWomanItem = (item) => {
    this.props.navigation.navigate('ProductDetail', { data: item });
  }
  render() {
    const isOnPressRecommend = this.props.navigation.getParam('isOnPressRecommend');
    const isOnPressFashion = this.props.navigation.getParam('isOnPressFashion');

    const isOnPressTrending = this.props.navigation.getParam('isOnPressTrending');
    const dataSource = this.props.navigation.getParam('dataSource');
    const content = this.props.navigation.getParam('content');
    const categoryID = this.props.categoryID;
    onCategoryPress = () => {
      this.props.navigation.navigate('Category', { dataSourceCategory: dataSource.dataSourceCategory });
    }
    return (
      <View style={styles.container}>
        <Shopping onPressShoppingWomanItem={this.onPressShoppingWomanItem}
          isOnPressWomanRecommend={isOnPressRecommend}
          isOnPressWomanFashion={isOnPressFashion}
          isOnPressWomanTrending={isOnPressTrending}
          onPressButton={this.props.onPressButtonCategoryWoman}
          dataSourceRecommend={dataSource.dataSourceRecommend}
          dataSourceFashion={dataSource.dataSourceFashion}
          dataSourceTrending={dataSource.dataSourceTrending}
          dataSourceCategory={dataSource.dataSourceCategory}
          content={content}
          onCategoryButton={() => onCategoryPress()}
          categoryID={categoryID} />
      </View>
    );
  }
}

ShoppingWomanScreen.navigationOptions = props => {
  return {
    headerTitle: "Dạo chợ Sen Đỏ",
    headerBackground: (
      <Image
        style={{ width: '100%', height: '100%' }}
        source={{ uri: 'https://img.freepik.com/free-psd/abstract-background-design_1297-82.jpg?size=626&ext=jpg' }}
      />
    ),
    headerTintColor: 'white',
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTitle: {
    //marginLeft: 90
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
})