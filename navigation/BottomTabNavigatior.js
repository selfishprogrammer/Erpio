/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {
  SVGAccount,
  SVGAccountInactive,
  SVGHome,
  SVGHomeInactive,
  SVGMore,
  SVGMoreInactive,
} from '../constants/Images';
import {SvgXml} from 'react-native-svg';
import {Platform, Text} from 'react-native';
import AccountScreen from '../screens/ProfileScreen/AccountScreen';
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};
const AccountStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="AccountScreen">
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
    </Stack.Navigator>
  );
};

const MoreStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="MoreScreen">
      <Stack.Screen name="MoreScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};
export default function BottomTabNavigator() {
  const Bottom = createMaterialBottomTabNavigator();

  return (
    <Bottom.Navigator
      initialRouteName="HomeScreen"
      sceneAnimationEnabled={true}
      activeColor="black"
      inactiveColor="grey"
      screenOptions={{
        headerShown: false,
      }}
      barStyle={{
        backgroundColor: '#fff',
        height: Platform.OS === 'ios' ? 70 : 50,
        elevation: 6,
        paddingBottom: Platform.OS === 'ios' ? 10 : 0,
        // borderTopWidth: 0.5,
        // borderTopColor: 'grey',
      }}>
      <Bottom.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: (
            <Text style={{fontFamily: 'Poppins-Medium', marginVertical: 5}}>
              Home
            </Text>
          ),
          tabBarIcon: ({focused, color}) => (
            <SvgXml xml={focused ? SVGHome : SVGHomeInactive} />
          ),
        }}
      />

      <Bottom.Screen
        name="Search"
        component={AccountStack}
        options={{
          headerShown: true,

          tabBarLabel: (
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                marginVertical: 5,
                alignSelf: 'center',
              }}>
              Profile
            </Text>
          ),
          tabBarIcon: ({focused, color}) => (
            <SvgXml xml={focused ? SVGAccount : SVGAccountInactive} />
          ),
        }}
      />
      <Bottom.Screen
        name="Chats"
        component={MoreStack}
        options={{
          tabBarLabel: (
            <Text style={{fontFamily: 'Poppins-Medium', marginVertical: 5}}>
              More
            </Text>
          ),
          tabBarIcon: ({focused, color}) => (
            <SvgXml xml={focused ? SVGMore : SVGMoreInactive} />
          ),
        }}
      />
    </Bottom.Navigator>
  );
}
