import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import About from "../screens/about";

const { Navigator, Screen } = createStackNavigator();

const AboutStack = () => (
  <Navigator headerMode="float">
    {/* //other options: "float", "screen" default= */}
    <Screen name="About"
      component={About}
      options={{
        title: 'About',
        headerStyle: { backgroundColor: 'pink' },
        headerTintColor: 'blue',
      }}
    />
  </Navigator>
);

export default AboutStack

// const AboutStack = () => (
//   <NavigationContainer>
//     <HomeNavigator />
//   </NavigationContainer>
// );

// export default AboutStack