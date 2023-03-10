/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import COLORS from '../utils/COLORS';

const HomeScreen = ({navigation}: any) => (
  <SafeAreaView
    style={{flex: 1, backgroundColor: COLORS.WHITE, paddingHorizontal: 15}}>
    <ScrollView>
      <View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
          <Text style={{color: COLORS.BLACK, fontSize: 30, fontWeight: 'bold'}}>
            Home
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

export default HomeScreen;
