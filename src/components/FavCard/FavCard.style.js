import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'white',
    borderColor: '#bdbdbd',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 2,
  },
  company: {
    fontSize: 17,
    marginBottom: 3,
  },
  location_container: {
    backgroundColor: '#f35252',
    padding: 3,
    borderRadius: 15,
    alignSelf: 'flex-start',
    marginBottom: 2,
  },

  location: {
    color: 'white',
    padding: 3,
  },
  level: {
    color: '#f35252',
    alignSelf: 'flex-end',
  },
});
