//import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import {Image} from 'react-native';

import React from 'react';
import Header from '../shared/header';

const screens = {
  // Name of navigation screen component(can be anything)
  Home: {
    screen: Home,
    // pass the navigation prop to the Header so it can access its functions
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Home" />,
        headerBackground: () => (
          <Image
            source={require('../assets/game_bg.png')}
            style={{height: '100%'}}
          />
        ),
      };
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    // headerTintColor: '#333',
    headerStyle: {backgroundColor: '#eee'},
  },
});

export default HomeStack;

// We are wrapping this navigation and the about page in a
// drawer navigation so we get a single header for all screens
//export default createAppContainer(homeStack);
