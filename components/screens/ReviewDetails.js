import React from 'react';
import {Text, View, StyleSheet, Button, Image} from 'react-native';

import {globalStyles, images} from '../styles/global';
import Card from '../shared/card';

function ReviewDetails(props) {
  //     const handlePress = () => {
  //     props.navigation.goBack();
  //   };

  const rating = props.navigation.getParam('rating');

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.text}>
          {props.navigation.getParam('title')}
        </Text>
        <Text style={globalStyles.text}>
          {props.navigation.getParam('body')}
        </Text>
        <View style={styles.rating}>
          <Text style={globalStyles.text}>Rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
});

export default ReviewDetails;
