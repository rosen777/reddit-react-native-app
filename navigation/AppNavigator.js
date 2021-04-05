import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Posts from "../screens/Posts";

// Nav Container – hosts app navigation context
// Stack Navigator – hosts a collection of screens

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Posts" component={Posts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
