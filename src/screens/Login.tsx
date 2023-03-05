import React, {useState} from 'react';
import {Button} from 'react-native';
import {Keyboard, SafeAreaView, Text, View} from 'react-native';
import Input from '../components/Input';
import Loader from '../components/Loader';
import COLORS from '../Utils/COLORS';

const Login = (): JSX.Element => {
  const [inputs, setInputs] = useState({email: '', password: ''});
  const [errors, setErrors] = useState({email: null, password: null});
  const [loading, setLoading] = useState(false);

  const handleOnchange = (text: string, input: string) => {
    setInputs((prevState) => ({...prevState, [input]: text}));
  };

  const handleError = (error: any, input: string) => {
    setErrors((prevState) => ({...prevState, [input]: error}));
  };

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    }
    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    }
    if (isValid) {
      login();
    }
  };

  const login = () => {
    setLoading(true);
    console.log('login', inputs);
    setLoading(false);
  };

  return (
    <SafeAreaView style={{backgroundColor: COLORS.WHITE, flex: 1}}>
      <Loader visible={loading} />

      <View style={{paddingTop: 50, paddingHorizontal: 20}}>
        <Text style={{color: COLORS.BLACK, fontSize: 40, fontWeight: 'bold'}}>
          Login
        </Text>
        <Text
          style={{color: COLORS.SECONDARY, fontSize: 18, marginVertical: 10}}>
          Enter your details to Login
        </Text>
        <View style={{marginVertical: 10}}>
          <Input
            onChangeText={(text: string) => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            label="Email/Username"
            placeholder="Enter your E-Mail Address or Username"
            error={errors.email}
          />
          <Input
            onChangeText={(text: string) => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            label="Password"
            placeholder="Enter your password"
            error={errors.password}
            password
          />
          <Button title="Log In" onPress={validate} />
          <Text
            // onPress={()} navigation function
            style={{
              color: COLORS.BLACK,
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 16,
            }}>
            Don`t have account? Register
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
