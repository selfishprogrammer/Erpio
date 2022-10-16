/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../constants/Colors';
import {logo} from '../../constants/Images';
import {SafeAreaView} from 'react-native-safe-area-context';
import {userLogin} from '../../Services/Services';
import ErrorText from '../../components/ErrorText';
import Auth from '../../Services/Auth';
import {useDispatch} from 'react-redux';
import {setLogin} from '../../Redux/Reducer/user';
import Toast from '../../components/Toast';
export default function LoginScreen() {
  const [employee_id, setemployee_id] = useState('');
  const [password, setpassword] = useState('');
  const [passwordError, setpasswordError] = useState('');
  const [employeeIdError, setemployeeIdError] = useState('');
  const [backendError, setbackendError] = useState('');

  const dispatch = useDispatch();
  const resetInputError = () => {
    setemployee_id('');
    setpassword('');
    setemployeeIdError('');
    setpasswordError('');
    setbackendError('');
  };
  const login = async () => {
    resetInputError();
    if (employee_id.length <= 0) {
      setemployeeIdError('Fields cannot be empty!');
    }
    if (password.length <= 0) {
      setpasswordError('Fields cannot be empty!');
    } else {
      const userData = {
        employee_id: employee_id,
        password: password,
      };
      const loggedIn = await userLogin(userData);
      if (loggedIn?.status === 'true') {
        await Auth.setUser(loggedIn.details);
        await Auth.setUserEmail(loggedIn.details?.employee_email);
        dispatch(setLogin(true));
      } else {
        console.log('loggedInData===>>>>', loggedIn.data);
        setbackendError(loggedIn.data);
      }
    }
  };
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
        <Toast text={backendError} />
        <TextInput
          value={employee_id}
          onChangeText={setemployee_id}
          style={{
            width: '90%',
            backgroundColor: '#DFEEFC',
            marginVertical: 10,
            color: 'black',
            alignSelf: 'center',

            height: 40,
            borderRadius: 5,
            paddingHorizontal: 8,
          }}
          placeholder="Employee ID"
        />
        <ErrorText errorText={employeeIdError} />
        <TextInput
          value={password}
          onChangeText={setpassword}
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
        <ErrorText errorText={passwordError} />
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
            onPress={login}
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
