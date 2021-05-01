import {createStackNavigator} from 'react-navigation-stack';
import About from '../screens/About';

import React from 'react';
import Header from '../shared/header';
import {Image} from 'react-native';

const screens = {
  // Name of navigation screen component(can be anything)
  About: {
    screen: About,
    // pass the navigation prop to the Header so it can access its functions
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="About" />,
        headerBackground: () => (
          <Image
            source={require('../assets/game_bg.png')}
            style={{height: '100%'}}
          />
        ),
      };
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    // headerTintColor: '#444',
    headerStyle: {backgroundColor: '#eee'},
  },
});

//export default createAppContainer(homeStack);
export default AboutStack;
