/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, Platform} from 'react-native';
import React from 'react';

export default function MainBox() {
  const renderHomeMainBox = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignSelf: 'center',
          width: '70%',
          paddingVertical: 40,
        }}>
        <View>
          <View
            style={{
              width: 80,
              height: 80,
              backgroundColor: '#fff',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.5,
              shadowRadius: 1.8,
              borderRadius: 40,
              padding: 10,
              elevation: 5,
            }}>
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                borderWidth: 5,
                borderColor: '#2A6F9E',
              }}></View>
            <Text
              style={{
                position: 'absolute',
                textAlign: 'center',
                top: 30,
                right: 30,
                zIndex: 9999,
                fontFamily: 'Poppins-Bold',
                color: '#2A6F9E',
              }}>
              45
            </Text>
          </View>
          <Text
            style={{
              textAlign: 'center',
              marginVertical: 10,
              fontFamily: 'Poppins-Bold',
              color: '#2A6F9E',
              fontSize: 18,
            }}>
            Growth
          </Text>
        </View>
        <View>
          <View
            style={{
              width: 80,
              height: 80,
              backgroundColor: '#fff',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.5,
              shadowRadius: 1.8,
              borderRadius: 40,
              padding: 10,
              elevation: 5,
            }}>
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                borderWidth: 5,
                borderColor: '#2A6F9E',
              }}></View>
            <Text
              style={{
                position: 'absolute',
                textAlign: 'center',
                top: 30,
                right: 30,
                zIndex: 9999,
                fontFamily: 'Poppins-Bold',
                color: '#2A6F9E',
              }}>
              65
            </Text>
          </View>
          <Text
            style={{
              textAlign: 'center',
              marginVertical: 10,
              fontFamily: 'Poppins-Bold',
              color: '#2A6F9E',
              fontSize: 18,
            }}>
            Salary
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View
      style={{
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 0.84,
        backgroundColor: 'white',
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
        borderColor: 'grey',
        borderRightWidth: Platform.OS === 'android' ? 0.5 : 0,
        borderBottomWidth: Platform.OS === 'android' ? 0.5 : 0,
        borderLeftWidth: Platform.OS === 'android' ? 0.5 : 0,
      }}>
      {renderHomeMainBox()}
    </View>
  );
}
