import React from 'react';
import {Text, View, StyleSheet, Image, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Header({navigation, title}) {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <Icon
        name="menu"
        size={28}
        color="black"
        onPress={openMenu}
        style={styles.icon}
      />
      <View style={styles.headerTitle}>
        <Image
          source={require('../assets/heart_logo.png')}
          style={styles.logo}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    letterSpacing: 1,
    marginHorizontal: 10,
  },
  icon: {
    position: 'absolute',
    left: 0,
  },
  logo: {
    height: 26,
    width: 26,
  },
  headerTitle: {
    flexDirection: 'row',
  },
});

export default Header;
