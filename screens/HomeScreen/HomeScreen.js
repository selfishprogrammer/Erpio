/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {Platform, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Header';
import MainBox from '../../components/MainBox';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Header title="Home" />
      <MainBox screen="Home" />
    </SafeAreaView>
  );
}
