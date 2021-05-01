import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import {Image} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import About from '../screens/About';
import React from 'react';
import Header from '../shared/header';
//import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        // options={({navigation}) => {
        //   return {
        //     headerTitle: () => <Header navigation={navigation} title="Home" />,
        //     headerBackground: () => (
        //       <Image
        //         source={require('../assets/game_bg.png')}
        //         style={{height: '100%'}}
        //       />
        //     ),
        //   };
        // }}
      />
      <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
    </Stack.Navigator>
  );
};

const AboutStack = () => {
  return (
    <Stack.Navigator initialRouteName="About">
      <Stack.Screen
        name="About"
        component={About}
        // options={({navigation}) => {
        //   return {
        //     headerTitle: () => <Header navigation={navigation} title="About" />,
        //     headerBackground: () => (
        //       <Image
        //         source={require('../assets/game_bg.png')}
        //         style={{height: '100%'}}
        //       />
        //     ),
        //   };
        // }}
      />
    </Stack.Navigator>
  );
};

const RootDrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="About" component={AboutStack} />
    </Drawer.Navigator>
  );
};

const AppNavigator = () => {
  return <RootDrawerNavigator />;
};

export {RootDrawerNavigator, AppNavigator};
