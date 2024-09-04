import React from 'react';
import LottieView from 'lottie-react-native';
import {View, Text} from 'react-native';

export default ({err}) => {
  return (
    <View style={{flex: 1}}>
      <LottieView
        source={require('../../assets/error.json')}
        style={{flex: 1}}
        autoPlay
        loop
      />
      <Text style={{fontWeight: 'bold', fontSize: ''}}>{err.message}</Text>
    </View>
  );
};
