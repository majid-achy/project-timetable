import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeNavigator';
import DirectoryNavigator from './DirectoryNavigator';
import UserNavigator from './UserNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Directory" component={DirectoryNavigator} />
      <Tab.Screen name="User" component={UserNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
