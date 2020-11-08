import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import {globalStyles, images} from '../styles/global';
import Card from '../shared/Card';

export default function ReviewDetails({route,navigation }) {
  const pressHandler = () => {
    // navigation.navigate('ReviewDetails');
    
    navigation.goBack(); // navigation.pop();
  }

  const { title,body, rating } = route.params;
  
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.title}>ReviewDetails Screen</Text>
        <Button title="go to Home page" onPress={pressHandler}/>
        <Text>{ title }</Text>
        <Text>{ body }</Text>
        {/* <Text>{ rating }</Text> */}
        <View style={styles.rating}>
          <Text>Review Rating: </Text>
          {/* <Image source={require('../assets/rating-1.png')} />  */}
          <Image source={images.ratings[rating]}/>
        </View>
      </Card>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  }
});