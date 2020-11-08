import React, { useState } from 'react';
import {
  StyleSheet, View, Text, Button, FlatList,
  TouchableOpacity, TouchableWithoutFeedback, Modal, Keyboard
} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/Card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './ReviewForm'


export default function Home({ navigation }) {
  // const pressHandler = () => {
  //   // navigation.navigate('ReviewDetails');
  //   navigation.push('ReviewDetails');
  // }
  const [modalOpen, setModalOpen] = useState(false);

  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 2, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);

  const addReview = (review) => {
    const newReview = {
      key: new Date().getTime().toString(),
      ...review,
    }
    console.log(newReview);
    setReviews((preReview) => {
      return [newReview, ...preReview];
    });
    setModalOpen(false);
  }

  return (
    <View style={globalStyles.container}>
      {/* <Text style={globalStyles.title}>Home Screen</Text> */}
      {/* <Button title="go to detail page" onPress={pressHandler}/> */}

      <Modal visible={modalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name='close'
              size={24}
              style={{ ...styles.modalClose, ...styles.modalToggle, }}
              onPress={() => setModalOpen(false)}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>

      </Modal>

      <MaterialIcons
        name='add'
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
              <Card>
                <Text style={globalStyles.title}>{item.title}</Text>
              </Card>

            </TouchableOpacity>
          )
        }}
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
    borderRadius: 20,
    alignSelf: 'center',
    backgroundColor: 'red'
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1
  }
});