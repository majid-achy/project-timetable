import React from 'react';
import {Button} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Settings from '../Screens/DrawerScreens/Settings';
import Map from '../Screens/DrawerScreens/Map';
import TabNavigator from './TabNavigator';
const Drawer = createDrawerNavigator();
const shouldBeGestureEnable = route => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : 'Home';
  let enabled = false;
  switch (routeName) {
    case 'Home':
      enabled = false;
      break;
    case 'User':
      enabled = true;
      break;
    case 'Directory':
      enabled = false;
      break;
  }
  return enabled;
};
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={({navigation}) => {
        return (
          <DrawerContentScrollView>
            <Button
              title="Settings"
              onPress={() => {
                navigation.closeDrawer();
                navigation.navigate('Settings');
              }}></Button>
            <Button
              title="Map"
              onPress={() => {
                navigation.closeDrawer();
                navigation.navigate('Map');
              }}></Button>
          </DrawerContentScrollView>
        );
      }}
      drawerStyle={{
        backgroundColor: '#c6cbef',
        width: 240,
      }}>
      <Drawer.Screen
        options={({route}) => {
          return {
            gestureEnabled: shouldBeGestureEnable(route),
          };
        }}
        name="App"
        component={TabNavigator}
      />
      {/* <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Map" component={Map} /> */}
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
