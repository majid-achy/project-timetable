import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import Header from './Header.js';

const UserProfile = ({navigation}) => {
  const [state, setState] = useState('Hello World');
  const [searchOpen, setSearchOpen] = useState(false);
  navigation.setOptions(
    searchOpen
      ? {
          header: () => {
            return <Header />;
          }
        }
      : {
          headerLeft: () => (
            <Button
              title="Menu"
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          ),
          headerRight: () => (
            <Button
              title="Search"
              onPress={() => {
                setSearchOpen(true);
              }}
            />
          ),
        },
  );
  return (
    <View>
      <Text>{state}</Text>
      <Button
        onPress={() => {
          navigation.navigate('Courses');
        }}
        title="Press here"
      />
    </View>
  );
};

export default UserProfile;
