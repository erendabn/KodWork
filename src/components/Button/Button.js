import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Button.style';

function Button({name, onPress, icon}) {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      style={styles.button_container}>
      <Icon name={icon} size={30} color={'white'} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
}

// const styles = StyleSheet.create({
//   button_container: {
//     backgroundColor: '#f56a6a',
//     margin: 10,
//     flexDirection: 'row',
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     flex: 1,
//     marginBottom: 25,
//     padding: 10,
//   },
//   name: {color: 'white', marginLeft: 10, fontWeight: 'bold'},
// });

export default Button;
