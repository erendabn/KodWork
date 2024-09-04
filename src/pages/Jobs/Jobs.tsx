import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';

import useFetch from '../../hooks/useFetch';
import {API_URL} from '@env';
import JobsCard from '../../components/JobsCard';

import Loading from '../../components/Loading';
import Error from '../../components/Error';

export default (props: any) => {
  const {data, loading, error} = useFetch(
    `${API_URL}?category=Software%20Engineer&page=1`,
  );
  const navigation = props.navigation;
  function handlePress(id: number) {
    navigation.navigate('JobDetailPage', {id});
  }

  function renderJobs({item}) {
    return <JobsCard job={item} handlePress={handlePress} />;
  }

  return (
    <View style={{flex: 1}}>
      {loading && <Loading />}
      {error && <Error err={error} />}
      <FlatList
        keyExtractor={item => String(item.id)}
        data={data.results}
        renderItem={renderJobs}
      />
    </View>
  );
};
