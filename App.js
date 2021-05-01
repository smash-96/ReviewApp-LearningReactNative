import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
//import Home from './components/screens/Home';
import Navigator from './components/routes/drawer';

//import {AppNavigator} from './components/routes/AppNavigation';

function App(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Navigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
