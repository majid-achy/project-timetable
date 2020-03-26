import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Directory from '../Screens/DirectoryScreens/Directory';

const Stack = createStackNavigator();

const DirectoryNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Directory" component={Directory} />
    </Stack.Navigator>
  );
};

export default DirectoryNavigator;