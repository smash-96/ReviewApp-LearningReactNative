import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {globalStyles} from '../styles/global';

function About(props) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>About Screen!</Text>
    </View>
  );
}

export default About;
