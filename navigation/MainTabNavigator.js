import {View, Text, SafeAreaView} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import AuthNavigator from './AuthNavigator';
import BottomTabNavigator from './BottomTabNavigatior';
import Auth from '../Services/Auth';

export default function MainTabNavigator() {
  const [user, setuser] = useState(null);

  const Stack = createNativeStackNavigator();
  const {isLogin} = useSelector(state => state.user);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {!isLogin ? (
        <Stack.Screen name="authStack" component={AuthNavigator} />
      ) : (
        <Stack.Screen name="bottomNavigator" component={BottomTabNavigator} />
      )}
    </Stack.Navigator>
  );
}
