import React, {useState} from 'react';
import { StyleSheet, View, Text, Button , FlatList, TouchableOpacity} from 'react-native';
import globalStyles from '../styles/global';


export default function Home({ navigation }) {
  // const pressHandler = () => {
  //   // navigation.navigate('ReviewDetails');
  //   navigation.push('ReviewDetails');
  // }
  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);

  return (
    <View style={globalStyles.container}>
      {/* <Text style={globalStyles.title}>Home Screen</Text> */}
      {/* <Button title="go to detail page" onPress={pressHandler}/> */}
      <FlatList
        data={reviews}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
              <Text style={globalStyles.title}>{item.title}</Text>
            </TouchableOpacity> 
          )
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({

});