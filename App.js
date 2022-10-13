import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import mainTab from './navigation/MainTabNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
export default function App() {
  const Stack = createNativeStackNavigator();
  const {isLogin} = useSelector(state => state.user);
  console.log('isLogin', isLogin);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="botoomTab"
          options={{headerShown: false}}
          component={mainTab}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
