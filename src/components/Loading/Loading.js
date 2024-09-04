import React from 'react';
import LottieView from 'lottie-react-native';
import {Dimensions} from 'react-native';

export default () => {
  return (
    <LottieView
      source={require('../../assets/loadingFly.json')}
      style={{flex: 1}}
      autoPlay
      loop
    />
  );
};
