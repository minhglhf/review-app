// import React from 'react';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createAppContainer } from 'react-navigation';
// import About from '../screens/about';
// import Home from '../screens/home';
// import ReviewDetail from '../screens/reviewDetails';

// const screens = {
//     //Home in top of list => default screen

//     Home: {
//         screen: Home,
//          navigationOptions: {
//            title: 
//          }     
//     },
//     ReviewDetail: {
//         screen: ReviewDetail,
//     },
//     About: {
//         screen: About,
//     },
// }

// const HomeStack = createStackNavigator(
//     //register all screen want to stack
//     screens
// );

// export default createAppContainer(HomeStack)
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetail from "../screens/reviewDetails";
import Header from '../shared/Header'

const { Navigator, Screen } = createStackNavigator();

const HomeStack = ({navigation}) => (
  <Navigator headerMode="float">
    {/* //other options: "float", "screen" default= */}
    <Screen name="Home"
      component={Home}
      options={{
        // title: 'Home',
        // headerStyle: { backgroundColor: 'yellow' },
        // headerTintColor: 'blue',
        headerTitle: () => <Header navigation={navigation} title='Home'/>
      }}
    />
    <Screen name="ReviewDetails"
      component={ReviewDetail}
      options={{ title: 'ReviewDetails', headerStyle: { backgroundColor: 'pink' } }}
    />
  </Navigator>
);

export default HomeStack

// const HomeStack = () => (
//   <NavigationContainer>
//     <HomeNavigator />
//   </NavigationContainer>
// );

// export default HomeStack