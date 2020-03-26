import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UserProfile from '../Screens/UserScreens/UserProfile';
import Courses from '../Screens/UserScreens/Courses';

const Stack = createStackNavigator();

const UserNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerStyle:{ backgroundColor: '#f02a4b'}}}>
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="Courses" component={Courses} />
    </Stack.Navigator>
  );
};

export default UserNavigator;
