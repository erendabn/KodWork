import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Alert} from 'react-native';

import useFetch from '../../hooks/useFetch';
import {API_URL} from '@env';
import styles from './JobDetail.style';
import JobDetailCard from '../../components/JobDetailCard';
import Loading from '../../components/Loading';
import {useDispatch} from 'react-redux';

export default ({route, navigation}) => {
  const dispatch = useDispatch();
  const id = route.params.id;
  const {data: job, loading, error} = useFetch(`${API_URL}/${id}`);

  navigation.setOptions({
    title: job.name,
  });
  function handleAdd() {
    dispatch({type: 'FAV_LİST', payload: {item: job}});
  }
  const handleSubmit = () => {
    Alert.alert('Application sent');
    navigation.navigate('JobsPage');
  };

  return (
    <View style={styles.container}>
      {loading && <Loading />}
      {error && <Error />}
      <JobDetailCard
        data={job}
        handleAdd={handleAdd}
        handleSubmit={handleSubmit}
      />
    </View>
  );
};
