// In App.js in a new project

import * as React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Details } from '../pages';
// import Header from '../../components/Header'
import store from '../../stores/store';


const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer >
        <Stack.Navigator>
          <Stack.Screen 
          name="Home" 
          component={Home} 
            options={{
              title: 'My home',
              // headerShown: false
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen 
          name="Details" 
          component={Details} 
            options={{
              title: 'Details',
              // headerShown: false
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerTitleAlign: 'center',
          }}
        />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;