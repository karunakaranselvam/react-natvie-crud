import React from 'react';
import {Dimensions, SafeAreaView, ScrollView, Text, View} from 'react-native';
import COLORS from '../utils/COLORS';

const Contact = ({navigation}: any) => {
  const {height, width} = Dimensions.get('window');

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.WHITE,
        paddingHorizontal: width / 20,
        paddingVertical: height / 50
      }}>
      <ScrollView>
        <View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>
            <Text
              style={{color: COLORS.BLACK, fontSize: 30, fontWeight: 'bold'}}>
              Contact
            </Text>
            <Text
              style={{color: COLORS.DANGER, paddingTop: 15}}
              onPress={() => navigation.navigate('Login')}>
              Logout
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Contact;
