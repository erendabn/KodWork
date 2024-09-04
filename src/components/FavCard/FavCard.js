import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {useDispatch} from 'react-redux';

import styles from './FavCard.style';
import Button from '../Button';

function FavCard({job, handlePress}) {
  const dispatch = useDispatch();
  function nameWrite() {
    if (job.name && job.name.length > 0) {
      if (job.name.indexOf('JR') === -1) {
        return job.name;
      } else {
        return job.name.substring(0, job.name.indexOf('JR') - 2);
      }
    }
  }
  const handleRemove = () => {
    dispatch({type: 'REMOVE_LİST', payload: {remove: job}});
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          handlePress(job.id);
        }}>
        <Text style={styles.title} numberOfLines={1}>
          {nameWrite()}
        </Text>
        <Text style={styles.company}>{job.company.name}</Text>
        <View style={styles.location_container}>
          <Text style={styles.location}>{job.locations[0].name}</Text>
        </View>
        <Text style={styles.level}>{job.levels[0].name}</Text>
      </Pressable>
      <View style={styles.remBut}>
        <Button name={'Remove'} onPress={handleRemove} />
      </View>
    </View>
  );
}
export default FavCard;
