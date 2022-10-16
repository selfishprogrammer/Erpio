/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {SVGCrossRed} from '../constants/Images';

export default function ErrorText({hasError, errorText}) {
  if (errorText !== '') {
    return (
      <View
        style={{
          marginHorizontal: 20,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          width: '90%',
        }}>
        <SvgXml xml={SVGCrossRed} />
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            color: 'red',
            marginHorizontal: 5,
          }}>
          {errorText}
        </Text>
      </View>
    );
  }
}
