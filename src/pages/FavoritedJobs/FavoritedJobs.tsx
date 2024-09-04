import React from 'react';
import {Text, SafeAreaView, FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';

import FavCard from '../../components/FavCard';

export default ({navigation, route}) => {
  const favoritedList = useSelector(s => s.favoritedList);

  function handlePress(id: number) {
    navigation.navigate('JobDetailPage', {id});
  }

  function renderJobs({item}) {
    return <FavCard job={item} handlePress={handlePress} />;
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={favoritedList}
        renderItem={renderJobs}
        keyExtractor={item => String(item.id)}
      />
    </SafeAreaView>
  );
};
