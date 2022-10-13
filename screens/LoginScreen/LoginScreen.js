/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import {logo} from '../../constants/Images';
import {SafeAreaView} from 'react-native-safe-area-context';
export default function LoginScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.backgroundColor,
      }}>
      <Image
        source={logo}
        style={{width: 190, height: 100, marginTop: 50, alignSelf: 'center'}}
      />
      <Text
        style={{
          marginHorizontal: 20,
          fontSize: 20,
          marginTop: 20,
          fontFamily: 'Poppins-Medium',
          color: 'blue',
        }}>
        Good Morning
      </Text>
      <Text
        style={{
          marginHorizontal: 20,
          fontSize: 18,
          fontWeight: '700',
          fontFamily: 'Poppins-Bold',
          color: 'black',
        }}>
        Rahul Jha
      </Text>

      <View
        style={{
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.55,
          shadowRadius: 3.84,
          elevation: 5,
          borderRadius: 8,
          margin: 20,
          backgroundColor: Colors.backgroundColor,
          padding: 10,
        }}>
        <Text
          style={{
            fontSize: 15,
            padding: 10,
            fontFamily: 'Poppins-Bold',
            color: 'black',
            marginHorizontal: 10,
          }}>
          Welcome back to ERPIO ..
        </Text>
        <TextInput
          style={{
            width: '90%',
            backgroundColor: '#DFEEFC',
            marginVertical: 10,

            alignSelf: 'center',

            height: 40,
            borderRadius: 5,
            paddingHorizontal: 8,
          }}
          placeholder="Employee ID"
        />
        <TextInput
          style={{
            width: '90%',
            backgroundColor: '#DFEEFC',
            marginVertical: 10,

            alignSelf: 'center',

            height: 40,
            borderRadius: 5,
            paddingHorizontal: 8,
          }}
          placeholder="Password"
        />
        <TouchableOpacity
          style={{
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.2,
            shadowRadius: 3.84,
            elevation: 5,
            width: '90%',
            alignSelf: 'center',
            padding: 10,
            backgroundColor: '#63A0D8',
            height: 40,
            borderRadius: 5,
            paddingHorizontal: 8,
            marginVertical: 10,
          }}>
          <Text
            style={{
              fontSize: 15,
              lineHeight: 20,
              fontFamily: 'Poppins-Bold',
              color: 'black',
              alignSelf: 'center',
            }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
