/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';

export default function Toast({text}) {
  if (text !== '') {
    return (
      <View
        style={{
          marginHorizontal: 20,
          padding: 15,
          backgroundColor: 'red',
          borderRadius: 10,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'Poppins-Medium',
            color: 'white',
          }}>
          {text}
        </Text>
      </View>
    );
  }
}
