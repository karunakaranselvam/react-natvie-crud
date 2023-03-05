import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Login from './src/screens/Login';
import COLORS from './src/Utils/COLORS';

function App(): JSX.Element {
  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView>
        <Login />
      </ScrollView>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  textDark: {
    color: COLORS.DARK,
  },
});

export default App;
