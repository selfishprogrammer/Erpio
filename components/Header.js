/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
import {SvgXml} from 'react-native-svg';
import {SVGNotification} from '../constants/Images';

export default function Header({title}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor: Colors.backgroundColor,
      }}>
      <SvgXml xml={SVGNotification} />
      <Text
        style={{
          color: '#60A9ED',
          fontFamily: 'Poppins-Medium',
          fontSize: 20,
          textShadowColor: 'black',
          textShadowRadius: 2,
        }}>
        {title}
      </Text>
      <View
        style={{
          backgroundColor: '#60A9ED',
          borderRadius: 20,
          width: 30,
          height: 30,
        }}>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            marginTop: 2,
            color: 'white',
            fontFamily: 'Poppins-Bold',
          }}>
          R
        </Text>
      </View>
    </View>
  );
}
