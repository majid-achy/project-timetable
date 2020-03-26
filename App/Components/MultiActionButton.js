import React, {useState} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const AnimatedTouchableOpacity = Animated.createAnimatedComponent(
  TouchableOpacity,
);
const MultiActionButton = ({iconName, bottom, right, subButtons}) => {
  const [isPressed, setIsPressed] = useState(false);
  const [animatedValue] = useState(new Animated.Value(0.2));
  const buttonRotate = animatedValue.interpolate({
    inputRange: [0.2, 1],
    outputRange: ['0deg', '45deg'],
  });

  const handlePress = () => {
    Animated.spring(animatedValue, {
      toValue: isPressed ? 0.2 : 1,
      friction: 5,
      useNativeDriver: true,
    }).start(() => {
      setIsPressed(prevState => (prevState ? false : true));
    });
  };
  return (
    <View style={[styles.container, {bottom: bottom, right: right}]}>
      {subButtons.map((button, index) => (
        <Animated.View
          key={index}
          style={[
            styles.subButtonContainer,
            {
              transform: [
                {scale: animatedValue},
                {
                  translateY: animatedValue.interpolate({
                    inputRange: [0.2, 1],
                    outputRange: [0.2, -50 - 50 * index],
                  }),
                },
              ],
            },
          ]}>
          <Text style={styles.buttonLabel}>{button.label}</Text>
          <TouchableOpacity onPress={button.onPress} style={[styles.subButton]}>
            <Icon name={button.iconName} size={20} color="#f02a4b" />
          </TouchableOpacity>
        </Animated.View>
      ))}
      <AnimatedTouchableOpacity
        activeOpacity={1}
        onPress={handlePress}
        style={[styles.mainButton, {transform: [{rotate: buttonRotate}]}]}>
        {/* <Animated.View
          style={[styles.mainButton, {transform: [{rotate: buttonRotate}]}]}> */}
        <Icon name={iconName} size={30} color="#FFF" />
        {/* </Animated.View> */}
      </AnimatedTouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    // right: 10,
    alignItems: 'center',
  },
  mainButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f02a4b',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  subButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  subButtonContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonLabel: {
    fontSize: 10,
    backgroundColor: '#f02a4b90',
    textAlign: 'center',
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 5,
    color: '#fff',
    position: 'absolute',
    right: 50,
  },
});
export default MultiActionButton;
