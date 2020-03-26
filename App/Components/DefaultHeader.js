import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  TextInput,
  Keyboard,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const DefaultHeader = ({backArrow}) => {
  const navigation = useNavigation();

  return (
    <View style={{height: 52, elevation: 3, backgroundColor: '#f02a4b'}}>
      <View
        style={{
          flex: 1,
          padding: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {backArrow ? (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                navigation.goBack();
              }}
              style={{marginRight: 10}}>
              <Icon name="md-arrow-back" size={24} color="white" />
            </TouchableOpacity>
          ) : null}
          <Text style={{fontSize: 20, color: '#fff'}}>Home</Text>
        </View>
      </View>
    </View>
  );
};

export default DefaultHeader;
