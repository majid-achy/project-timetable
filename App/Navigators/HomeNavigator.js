import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screens/HomeScreens/Home';

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;