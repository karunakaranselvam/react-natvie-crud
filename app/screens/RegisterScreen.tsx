/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useRef, useState} from 'react';
import {
  Dimensions,
  Keyboard,
  SafeAreaView,
  ScrollView,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View
} from 'react-native';
import Input from '../components/Input';
import COLORS from '../utils/COLORS';

const RegisterScreen = ({navigation}: any) => {
  const [params, setParams] = useState({
    firstname: '',
    lastname: '',
    mobile: '',
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    firstname: null,
    lastname: null,
    mobile: null,
    username: null,
    password: null
  });

  const {height, width} = Dimensions.get('window');

  const lastNameRef = useRef<any>();
  const mobileRef = useRef<any>();
  const usernameRef = useRef<any>();
  const passwordRef = useRef<any>();

  const handleChange = (text: string, input: string) => {
    setParams(prev => ({...prev, [input]: text}));
  };

  const handleError = (error: unknown, input: string) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };

  const handleSubmit = () => {
    setParams({
      firstname: '',
      lastname: '',
      mobile: '',
      username: '',
      password: ''
    });
    navigation.navigate('Home');
    ToastAndroid.show('Registered successfully!', ToastAndroid.SHORT);
  };

  const validation = () => {
    Keyboard.dismiss();
    let isValid = false;

    if (!params.firstname) {
      handleError('Firstname is required', 'firstname');
      isValid = false;
    }

    if (!params.lastname) {
      handleError('Lastname is required', 'lastname');
      isValid = false;
    }

    if (!params.mobile) {
      handleError('Mobile is required', 'mobile');
      isValid = false;
    }

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
      <ScrollView>
        <View style={{paddingTop: height / 10, paddingHorizontal: width / 15}}>
          <Text style={{color: COLORS.BLACK, fontSize: 40, fontWeight: 'bold'}}>
            Register
          </Text>
          <Text
            style={{color: COLORS.SECONDARY, fontSize: 18, marginVertical: 10}}>
            Enter your details to Register
          </Text>
          <View>
            <Input
              label="First Name"
              placeholder="Enter your first name"
              iconName="user-o"
              enterKeyHint="next"
              autoFocus={true}
              onSubmitEditing={() => lastNameRef?.current?.focus()}
              onChangeText={(text: string) => handleChange(text, 'firstname')}
              onFocus={() => handleError(null, 'firstname')}
              error={errors.firstname}
              value={params.firstname}
            />

            <Input
              label="Last Name"
              placeholder="Enter your lastname"
              iconName="user-o"
              refernce={lastNameRef}
              onSubmitEditing={() => mobileRef?.current?.focus()}
              onChangeText={(text: string) => handleChange(text, 'lastname')}
              onFocus={() => handleError(null, 'lastname')}
              enterKeyHint="next"
              error={errors.lastname}
              value={params.lastname}
            />

            <Input
              label="Mobile"
              placeholder="Enter your mobile"
              iconName="phone"
              keyboardType="number-pad"
              enterKeyHint="next"
              maxLength={10}
              refernce={mobileRef}
              onSubmitEditing={() => usernameRef?.current?.focus()}
              onChangeText={(text: string) => handleChange(text, 'mobile')}
              onFocus={() => handleError(null, 'mobile')}
              error={errors.mobile}
              value={params.mobile}
            />

            <Input
              label="Username"
              placeholder="Enter your username"
              iconName="user-o"
              keyboardType="email-address"
              enterKeyHint="next"
              refernce={usernameRef}
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
              enterKeyHint="enter"
              refernce={passwordRef}
              onChangeText={(text: string) => handleChange(text, 'password')}
              onFocus={() => handleError(null, 'password')}
              error={errors.password}
              value={params.password}
              password
            />
          </View>
          <View style={{marginTop: 10}}>
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
                Register
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{paddingTop: 10}}>
            <Text style={{color: COLORS.SECONDARY}}>
              Already have an account?{' '}
              <Text
                style={{color: COLORS.BLACK, textDecorationLine: 'underline'}}
                onPress={() => navigation.navigate('Login')}>
                Login
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
