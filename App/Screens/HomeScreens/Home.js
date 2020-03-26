import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MultiActionButton from '../../Components/MultiActionButton';
import SearchHeader from '../../Components/SearchHeader';
import DefaultHeader from '../../Components/DefaultHeader';
import TimeTableView, {genTimeBlock} from 'react-native-timetable';
import { SafeAreaView } from 'react-native-safe-area-context';
const test = genTimeBlock('mon');
const events_data = [
  {
    title: 'Math',
    startTime: genTimeBlock('MON', 8),
    endTime: genTimeBlock('MON', 9),
    location: 'Classroom 403',
    extra_descriptions: ['Kim', 'Lee'],
  },{
    title: 'Math',
    startTime: genTimeBlock('MON', 9),
    endTime: genTimeBlock('MON', 10, 50),
    location: 'Classroom 403',
    extra_descriptions: ['Kim', 'Lee'],
  },
  {
    title: 'Math',
    startTime: genTimeBlock('WED', 9),
    endTime: genTimeBlock('WED', 10, 50),
    location: 'Classroom 403',
    extra_descriptions: ['Kim', 'Lee'],
  },
  {
    title: 'Physics',
    startTime: genTimeBlock('MON', 11),
    endTime: genTimeBlock('MON', 11, 50),
    location: 'Lab 404',
    extra_descriptions: ['Einstein'],
  },
  {
    title: 'Physics',
    startTime: genTimeBlock('WED', 11),
    endTime: genTimeBlock('WED', 11, 50),
    location: 'Lab 404',
    extra_descriptions: ['Einstein'],
  },
  {
    title: 'Mandarin',
    startTime: genTimeBlock('TUE', 9),
    endTime: genTimeBlock('TUE', 10, 50),
    location: 'Language Center',
    extra_descriptions: ['Chen'],
  },
  {
    title: 'Japanese',
    startTime: genTimeBlock('FRI', 9),
    endTime: genTimeBlock('FRI', 10, 50),
    location: 'Language Center',
    extra_descriptions: ['Nakamura'],
  },
  {
    title: 'Club Activity',
    startTime: genTimeBlock('THU', 9),
    endTime: genTimeBlock('THU', 10, 50),
    location: 'Activity Center',
  },
  {
    title: 'Club Activity',
    startTime: genTimeBlock('FRI', 13, 30),
    endTime: genTimeBlock('FRI', 14, 50),
    location: 'Activity Center',
  },
];
const Home = ({navigation}) => {
  const [section, setSection] = useState('1');
  navigation.setOptions(
    section === '1'
      ? {header: () => <SearchHeader />}
      : {header: () => <DefaultHeader />},
  );
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>Home page</Text>
      <Button
        title="test"
        onPress={() => {
          // navigation.navigate('User', {screen: 'Courses'});
          setSection(prevState => (prevState === '1' ? '2' : '1'));
        }}
      />
      {/* <Icon name="ios-home" size={20} style={{alignSelf: 'center'}} /> */}
      <MultiActionButton
        iconName="md-add"
        bottom={20}
        right={10}
        subButtons={[
          {
            iconName: 'md-checkmark',
            onPress: () => {
              console.log('Select All');
            },
            label: 'Select All',
          },
          // {
          //   iconName: 'ios-thumbs-up',
          //   onPress: () => {
          //     console.log('thumbs up');
          //   },
          //   label: 'Thumbs up',
          // },
          {
            iconName: 'md-send',
            onPress: () => {
              console.log('Send');
            },
            label: 'Send email',
          },
        ]}
      />
      <TimeTableView
        // scrollViewRef={this.scrollViewRef}
        events={events_data}
        pivotTime={9}
        pivotTime={20}
        pivotDate={test}
        numberOfDays={5}
        // onEventPress={this.onEventPress}
        headerStyle={styles.headerStyle}
        formatDateHeader="dddd"
        // locale="ko"
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#81E1B8',
  },
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
});
export default Home;
