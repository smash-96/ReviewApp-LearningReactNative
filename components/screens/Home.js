import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {globalStyles} from '../styles/global';
import Card from '../shared/card';
import ReviewForm from './reviewForm';

function Home(props) {
  const [reviews, setReviews] = useState([
    {
      title: 'Zelda, Breath of Fresh Air',
      rating: 5,
      body: 'lorem ipsum',
      key: '1',
    },
    {
      title: 'Gotta Catch Them All (again)',
      rating: 4,
      body: 'lorem ipsum',
      key: '2',
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: 'lorem ipsum',
      key: '3',
    },
    {
      title: 'One Piece',
      rating: 5,
      body: 'I am gonna be king of the pirates',
      key: '4',
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);

  //   const handlePress = () => {
  //     // All screens declared in the stack navigator can be accessed
  //     // through the props of that screen
  //     props.navigation.navigate('ReviewDetails');

  //     //Explicit call to push next screen on top of navigation stack
  //     //props.navigation.push('ReviewDetails');
  //   };

  const addNewReview = review => {
    setReviews(prevState => {
      return [
        ...prevState,
        {
          title: review.title,
          body: review.body,
          rating: review.rating,
          key: Math.random().toString(),
        },
      ];
    });
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen}>
        <View style={styles.modalContent}>
          <Icon
            name="close"
            size={24}
            color="black"
            onPress={() => setModalOpen(false)}
            style={{...styles.modalToggle, ...styles.modalClose}}
          />
          <ReviewForm onSubmit={review => addNewReview(review)} />
        </View>
      </Modal>

      <Icon
        name="add"
        size={24}
        color="black"
        onPress={() => setModalOpen(true)}
        style={styles.modalToggle}
      />

      <FlatList
        data={reviews}
        renderItem={({item}) => (
          <TouchableOpacity
            // The 2nd parameter to navigate function is the data object in
            // key value structure that we want to pass to the next screen
            onPress={() => props.navigation.navigate('ReviewDetails', item)}>
            <Card>
              <Text style={globalStyles.text}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});

export default Home;
