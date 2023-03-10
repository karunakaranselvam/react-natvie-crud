/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import COLORS from '../utils/COLORS';
import Icon from 'react-native-vector-icons/FontAwesome';

const Input = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  onSubmitEditing = () => {},
  refernce,
  ...props
}: any) => {
  const [hidePassword, setHidePassword] = useState(password);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={{marginBottom: 5}}>
      <Text style={style.label}>{label}</Text>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: error
              ? COLORS.DANGER
              : isFocused
              ? COLORS.PRIMARY
              : COLORS.LIGHT,
            alignItems: 'center'
          }
        ]}>
        <Icon
          name={iconName}
          size={18}
          color={COLORS.BLACK}
          style={{marginRight: 10}}
        />
        <TextInput
          autoCorrect={false}
          secureTextEntry={hidePassword}
          style={{color: COLORS.BLACK, flex: 1}}
          placeholderTextColor={COLORS.SECONDARY}
          onBlur={() => setIsFocused(false)}
          ref={refernce}
          onSubmitEditing={onSubmitEditing}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          {...props}
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye' : 'eye-slash'}
            style={{color: COLORS.BLACK, fontSize: 22}}
          />
        )}
      </View>
      {error && (
        <Text style={{marginTop: 7, color: COLORS.DANGER, fontSize: 12}}>
          {error}
        </Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: COLORS.SECONDARY
  },
  inputContainer: {
    height: 55,
    backgroundColor: COLORS.LIGHT,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.5
  }
});

export default Input;
