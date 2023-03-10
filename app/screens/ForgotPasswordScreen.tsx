/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Input from '../components/Input';
import COLORS from '../utils/COLORS';

const ForgotPasswordScreen = ({navigation}: any) => {
  const [params, setParams] = useState({mobile: ''});
  const [errors, setErrors] = useState({mobile: null});

  const {height, width} = Dimensions.get('window');
  const handleChange = (text: string, input: string) => {
    setParams(prev => ({...prev, [input]: text}));
  };

  const handleError = (error: unknown, input: string) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.WHITE}}>
      <View
        style={{
          paddingHorizontal: width / 15,
          paddingVertical: height / 5
        }}>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: COLORS.BLACK}}>
          Forgot Password
        </Text>
        <Text style={{color: COLORS.SECONDARY, paddingVertical: 10}}>
          Enter your mobile number to reset your password.
        </Text>
        <View style={{paddingTop: 30}}>
          <Input
            label="Mobile Number"
            iconName="phone"
            keyboardType="number-pad"
            placeholder="Enter mobile no"
            maxLength={10}
            autoFocus={true}
            onChangeText={(text: string) => handleChange(text, 'mobile')}
            onFocus={() => handleError(null, 'mobile')}
            error={errors.mobile}
            value={params.mobile}
          />
        </View>
        <View
          style={{
            margin: 20
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.PRIMARY,
              borderRadius: 20,
              marginHorizontal: 50,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <Text
              style={{
                color: COLORS.LIGHT,
                paddingVertical: 10,
                fontSize: 16,
                fontWeight: 'bold'
              }}>
              Get OTP
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            textAlign: 'center',
            color: COLORS.BLACK,
            textDecorationLine: 'underline'
          }}
          onPress={() => navigation.navigate('Login')}>
          Go Back
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
