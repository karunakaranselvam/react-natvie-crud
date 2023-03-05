import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  useWindowDimensions,
} from 'react-native';
import COLORS from '../Utils/COLORS';

const Loader = ({visible = false}: any) => {
  const {width, height} = useWindowDimensions();
  return (
    visible && (
      <View style={[style.container, {height, width}]}>
        <View style={style.loader}>
          <ActivityIndicator size="large" color={COLORS.PRIMARY} />
          <Text style={{marginLeft: 10, fontSize: 16}}>Loader...</Text>
        </View>
      </View>
    )
  );
};

const style = StyleSheet.create({
  loader: {
    height: 70,
    backgroundColor: COLORS.WHITE,
    marginHorizontal: 50,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  container: {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
  },
});
export default Loader;
