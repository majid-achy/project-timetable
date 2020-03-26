import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  TextInput,
  Keyboard,
  Easing,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchHeader = ({backArrow}) => {
  const searchInput = useRef(null);
  const navigation = useNavigation();
  const [isPressed, setIsPressed] = useState(false);
  const [animatedValue] = useState(new Animated.Value(0));
  const handlePress = () => {
    Animated.timing(animatedValue, {
      toValue: isPressed ? 0 : 1,
      duration: 200,
      useNativeDriver: true,
      easing: Easing.in(),
    }).start(() => {
      setIsPressed(prevState => !prevState);
    });
  };
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
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            handlePress();
            searchInput.current.focus();
          }}
          style={{padding: 5}}>
          <Icon name="md-search" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <Animated.View
        style={{
          width: '100%',
          height: 52,
          position: 'absolute',
          left: 0,
          top: 0,
          backgroundColor: '#fff',
          flexDirection: 'row',
          alignItems: 'center',
          transform: [
            // {scale: animatedValue},
            {
              translateX: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [Dimensions.get('window').width, 0],
              }),
            },
          ],
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            handlePress();
            Keyboard.dismiss();
          }}>
          <Icon
            name="md-arrow-back"
            size={24}
            color="#f02a4b"
            style={{marginLeft: 5, padding: 10}}
          />
        </TouchableOpacity>
        <TextInput
          style={{flex: 1}}
          ref={searchInput}
          placeholder="Search here..."
          placeholderTextColor="#757575"
        />
      </Animated.View>
    </View>
  );
};

export default SearchHeader;
