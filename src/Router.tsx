import './gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Provider} from 'react-redux';

import Jobs from './pages/Jobs';
import JobDetail from './pages/JobDetail';
import FavoritedJobs from './pages/FavoritedJobs';
import UserProvider from './context/Provider';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function JobStack() {
  return (
    <Stack.Navigator
      initialRouteName="JobsPage"
      screenOptions={{headerTintColor: '#f56a6a'}}>
      <Stack.Screen
        name="JobsPage"
        component={Jobs}
        options={{headerTitle: 'Jobs'}}
      />
      <Stack.Screen name="JobDetailPage" component={JobDetail} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="JobStack">
          <Drawer.Screen
            name="JobStack"
            component={JobStack}
            options={{drawerLabel: 'Jobs'}}
          />
          <Drawer.Screen
            name="FavoritesPages"
            component={FavoritedJobs}
            options={{drawerLabel: 'Favorited Jobs'}}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
export default App;
