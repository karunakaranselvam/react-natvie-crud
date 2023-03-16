/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import COLORS from '../utils/COLORS';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({headerText, back}: any) => {
  const {height} = Dimensions.get('window');

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.WHITE,
        maxHeight: height / 20
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
        {back && (
          <View style={{alignItems: 'flex-start'}}>
            <Text>
              <Icon
                name={'chevron-left'}
                style={{color: COLORS.DARK, fontSize: 22}}
              />
            </Text>
          </View>
        )}
        <View>
          <Text
            style={{
              color: COLORS.BLACK,
              fontSize: 30,
              fontWeight: 'bold'
            }}>
            {headerText}
          </Text>
        </View>
        <View>
          <Icon name={'bars'} style={{color: COLORS.BLACK, fontSize: 22}} />
        </View>
      </View>
    </View>
  );
};

export default Header;
