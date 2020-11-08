import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import globalStyles from '../styles/global';

export default function ReviewDetails({route,navigation }) {
  const pressHandler = () => {
    // navigation.navigate('ReviewDetails');
    
    navigation.goBack(); // navigation.pop();
  }

  const { title,body, rating } = route.params;
  
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>ReviewDetails Screen</Text>
      <Button title="go to Home page" onPress={pressHandler}/>
      <Text>{ title }</Text>
      <Text>{ body }</Text>
      <Text>{ rating }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});