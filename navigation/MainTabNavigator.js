import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator, createAppContainer,
  DrawerItems } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import TabBarIcon1 from '../components/TabBarIcon1';
import ShopScreen from '../screens/ShopScreen';
import ShoppingScreen from '../screens/ShoppingScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Drawer from '../components/Drawer';
import ShoppingWomanScreen from '../screens/ShoppingWomanScreen';
import CategoryScreen from '../screens/CategoryScreen';
import TabBarIcon2 from '../components/TabBarIcon2';
import TabBarIcon3 from '../components/TabBarIcon3';
import TabBarIcon4 from '../components/TabBarIcon4';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import ContactUsScreen from '../screens/ContactUsScreen';
import NewsScreen from '../screens/NewsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const ShopStack = createStackNavigator(
  {
    Shop: ShopScreen,
    ShoppingWoman: ShoppingWomanScreen,
    Category: CategoryScreen,
    ProductDetail: ProductDetailScreen
  },
  config
);

ShopStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarOptions: { 
    activeTintColor: 'red',
    inactiveTintColor: 'gray',
  },  
  tabBarIcon: ({ focused }) => (
    <TabBarIcon3
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'shop'
      }
    />
  ),
};

ShopStack.path = '';

const ShoppingStack = createStackNavigator(
  {
    Shopping: ShoppingScreen,
    ProductDetail: ProductDetailScreen,
    ShoppingWoman: ShoppingWomanScreen,
    Category: CategoryScreen
  },
  config
);

ShoppingStack.navigationOptions = {
  tabBarLabel: 'Shop',
  tabBarOptions: { 
    activeTintColor: 'red',
    inactiveTintColor: 'gray',
  },  
  tabBarIcon: ({ focused }) => (
    <TabBarIcon4 focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'shopify'} />
  ),
};

ShoppingStack.path = '';

const CartStack = createStackNavigator(
  {
    Cart: CartScreen,
  },
  config
);

CartStack.navigationOptions = {
  tabBarLabel: 'Cart',
  tabBarOptions: { 
    activeTintColor: 'red',
    inactiveTintColor: 'gray',
  },  
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-cart'} />
  ),
};

CartStack.path = '';

const NewsStack = createStackNavigator(
  {
    News: NewsScreen
  },
  config
);

NewsStack.navigationOptions = {
  tabBarLabel: 'News',
  tabBarOptions: { 
    activeTintColor: 'red',
    inactiveTintColor: 'gray',
  },  
  tabBarIcon: ({ focused }) => (
    <TabBarIcon2 focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'newspaper-o'} />
  ),
};

NewsStack.path = '';

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    AboutUs: AboutUsScreen,
    ContactUs: ContactUsScreen
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarOptions: { 
    activeTintColor: 'red',
    inactiveTintColor: 'gray',
  },  
  tabBarIcon: ({ focused }) => (
    <TabBarIcon1 focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'user'} />
  ),
};

ProfileStack.path = '';

const tabNavigator = createBottomTabNavigator({
  ShopStack,
  ShoppingStack,
  NewsStack,
  CartStack,
  ProfileStack
});

tabNavigator.path = '';

const drawer = createDrawerNavigator(
  {
    Initial: tabNavigator
  },
  {
    contentComponent: Drawer
  }
);

export default drawer;

// export default tabNavigator;
