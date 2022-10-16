/* eslint-disable react-hooks/exhaustive-deps */
import {StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import mainTab from './navigation/MainTabNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import Auth from './Services/Auth';
import {setLogin} from './Redux/Reducer/user';
export default function App() {
  const Stack = createNativeStackNavigator();
  const {isLogin} = useSelector(state => state.user);
  console.log('isLogin', isLogin);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);
  const fetchUserData = async () => {
    const userExist = await Auth.getUser();
    console.log('userData', userExist);
    if (userExist !== null) {
      dispatch(setLogin(true));
    }
  };
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="botoomTab"
            options={{headerShown: false}}
            component={mainTab}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
