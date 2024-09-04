import React, {useState} from 'react';
import {View, ScrollView, Text, Dimensions} from 'react-native';
import styles from './JobDetailCard.style';
import {RenderHTML} from 'react-native-render-html';
import Button from '../Button';
import {useDispatch} from 'react-redux';

function JobDetailCard({data, handleAdd, handleSubmit}) {
  const width = Dimensions.get('window').width;
  const name = data.name;

  function nameWrite() {
    if (name && name.length > 0) {
      if (!name.indexOf('JR')) {
        return name;
      } else {
        return name.substring(0, name.indexOf('JR') - 2);
      }
    } else {
      return 'Unkown Name';
    }
  }

  function contents() {
    if (data.contents && data.contents.length > 0) {
      if (data.contents.indexOf('LI-NM1') == -1) {
        return data.contents;
      } else {
        return data.contents.substring(0, data.contents.indexOf('LI-NM1'));
      }
    } else {
      return 'Unkown Content';
    }
  }

  const source = contents();
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.title_container}>
          <Text style={styles.title}>{nameWrite()}</Text>
          <View style={styles.subtitle_container}>
            <Text style={styles.subtitle}>Location: </Text>
            <Text style={styles.text}>
              {data.locations && data.locations.length > 0
                ? data.locations[0].name
                : 'Unknown Location'}{' '}
            </Text>
          </View>
          <View style={styles.subtitle_container}>
            <Text style={styles.subtitle}>Job Level: </Text>
            <Text style={styles.text}>
              {data.levels && data.levels.length > 0
                ? data.levels[0].name
                : 'Unknown Location'}{' '}
            </Text>
          </View>
          <Text style={styles.detail}>Job Detail</Text>
        </View>
        <View>
          <View style={styles.content_container}>
            <RenderHTML source={{html: `${source}`}} contentWidth={width} />
          </View>
        </View>
      </ScrollView>
      <View style={styles.button_container}>
        <Button name="Submit" icon="login" onPress={handleSubmit} />
        <Button name="Favorite Job" icon="heart" onPress={handleAdd} />
      </View>
    </View>
  );
}

export default JobDetailCard;
