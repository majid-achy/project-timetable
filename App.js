import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigator from './App/Navigators/DrawerNavigator';
import Settings from './App/Screens/DrawerScreens/Settings';
import Map from './App/Screens/DrawerScreens/Map';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={() => {
            return {headerShown: false};
          }}
          name="Drawer"
          component={DrawerNavigator}></Stack.Screen>
        <Stack.Screen name="Settings" component={Settings}></Stack.Screen>
        <Stack.Screen name="Map" component={Map}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
