import React from 'react';
import {View} from 'react-native';

import Routes from './app/navigation/Routes';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Routes />
    </View>
  );
}
