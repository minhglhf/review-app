import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {globalStyles} from '../styles/global';
import Card from '../shared/Card';

export default function About() {
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.title} >About Screen</Text>
      </Card>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});