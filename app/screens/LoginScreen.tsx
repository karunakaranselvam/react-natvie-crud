/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useRef, useState} from 'react';
import {
  Alert,
  Dimensions,
  Keyboard,
  SafeAreaView,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View
} from 'react-native';
import Input from '../components/Input';
import COLORS from '../utils/COLORS';

const LoginScreen = ({navigation}: any) => {
  const [params, setParams] = useState({username: '', password: ''});
  const [errors, setErrors] = useState({username: null, password: null});
  const {height, width} = Dimensions.get('window');
  const passwordRef = useRef<any>();

  const handleChange = (text: string, input: string) => {
    setParams(prev => ({...prev, [input]: text}));
  };

  const handleError = (error: unknown, input: string) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };

  const handleSubmit = () => {
    if (
      params.username === 'admin@gmail.com' &&
      params.password === 'Test@123'
    ) {
      setParams({username: '', password: ''});
      ToastAndroid.show('Login successfully!', ToastAndroid.SHORT);
      navigation.navigate('Home');
    } else {
      Alert.alert(
        'Invalid username or password',
        'Please enter a valid username or password'
      );
      setParams(prev => ({...prev, password: ''}));
    }
  };

  const validation = () => {
    Keyboard.dismiss();
    let isValid = false;

    if (!params.username) {
      handleError('Username is required', 'username');
      isValid = false;
    }

    if (!params.password) {
      handleError('Password is required', 'password');
      isValid = false;
    }

    if (
      /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(params.username)
    ) {
      isValid = true;
    } else {
      handleError('Please enter a valid username', 'username');
      isValid = false;
    }

    if (isValid) {
      handleSubmit();
    }
  };

  return (
    <SafeAreaView style={{backgroundColor: COLORS.WHITE, flex: 1}}>
      <View style={{paddingTop: height / 5, paddingHorizontal: width / 15}}>
        <Text style={{color: COLORS.BLACK, fontSize: 40, fontWeight: 'bold'}}>
          Login
        </Text>
        <Text
          style={{color: COLORS.SECONDARY, fontSize: 18, marginVertical: 10}}>
          Enter your details to Login
        </Text>
        <View>
          <Input
            label="Username"
            placeholder="Enter your username"
            iconName="user-o"
            keyboardType="email-address"
            enterKeyHint="next"
            autoFocus={true}
            onSubmitEditing={() => passwordRef?.current?.focus()}
            onChangeText={(text: string) => handleChange(text, 'username')}
            onFocus={() => handleError(null, 'username')}
            error={errors.username}
            value={params.username}
          />

          <Input
            label="Password"
            placeholder="Enter your password"
            iconName="lock"
            refernce={passwordRef}
            onChangeText={(text: string) => handleChange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            error={errors.password}
            value={params.password}
            password
          />
        </View>
        <View style={{margin: 20}}>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.PRIMARY,
              padding: 10,
              marginHorizontal: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20
            }}
            onPress={validation}>
            <Text
              style={{
                color: COLORS.WHITE,
                fontSize: 18,
                fontWeight: 'bold',
                textAlign: 'center'
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{paddingTop: 10}}>
          <Text style={{color: COLORS.SECONDARY}}>
            don&rsquo;t have you account{' '}
            <Text
              onPress={() => navigation.navigate('Register')}
              style={{color: COLORS.BLACK, textDecorationLine: 'underline'}}>
              click here
            </Text>
          </Text>
        </View>
        <View style={{paddingTop: 10}}>
          <Text
            onPress={() => navigation.navigate('Forgot Password')}
            style={{color: COLORS.BLACK, textDecorationLine: 'underline'}}>
            forgot password
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
