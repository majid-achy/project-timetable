import React from 'react';
import {View, Text} from 'react-native';
import SearchHeader from '../../Components/SearchHeader';

const Courses = ({navigation}) => {
  navigation.setOptions({header: () => <SearchHeader backArrow />});

  return (
    <View>
      <Text>Courses Screen</Text>
    </View>
  );
};

export default Courses;
