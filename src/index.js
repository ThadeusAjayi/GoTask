import React, {useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { Platform, StatusBar } from 'react-native';
import Colors from './colors';
import Home from './Home';
import {_navigator} from './NavigationService';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();
export default () => {
  useEffect(() => {
    Platform.OS == 'android' && StatusBar.setTranslucent(true);
    Platform.OS == 'android' && StatusBar.setBackgroundColor('white');
    StatusBar.setBarStyle('dark-content');
  }, []);
  
  return (
    <NavigationContainer
      ref={_navigator}>
      <Drawer.Navigator
        drawerType={'slide'}
        drawerContentOptions={{
          activeBackgroundColor: Colors.primary,
          itemStyle: {
            borderBottomColor: Colors.primaryDark,
            borderBottomWidth: 2,
          },
          labelStyle: {
            color: Colors.white,
            fontSize: 16,
            marginBottom: 10,
            textAlign: 'right',
          },
        }}
        drawerStyle={{
          backgroundColor: Colors.primary,
          paddingTop: 120,
        }}
        drawerPosition="left">
        <Drawer.Screen name="Contact Us" component={Home} />
        <Drawer.Screen name="FAQ" component={Home} />
        <Drawer.Screen name="About Us" component={Home} />
        <Drawer.Screen name="Products" component={Home} />
        <Drawer.Screen name="Insurance" component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
