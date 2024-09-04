import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {flex: 1},
  title_container: {backgroundColor: '#e0e0e0', padding: 10},
  title: {fontWeight: 'bold', fontSize: 25, color: '#29482b', marginBottom: 4},
  subtitle_container: {
    flexDirection: 'row',
    marginHorizontal: 4,
    marginBottom: 3,
  },
  subtitle: {color: '#f56a6a', fontWeight: 'bold', fontSize: 15},
  text: {fontWeight: 'bold'},
  detail: {
    textAlign: 'center',
    fontSize: 23,
    color: '#29482b',
    fontWeight: 'bold',
  },
  content_container: {marginHorizontal: 5},
  content: {},
  button_container: {flexDirection: 'row', justifyContent: 'space-around'},
});
