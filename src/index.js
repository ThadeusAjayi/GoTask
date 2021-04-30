import {createDrawerNavigator} from '@react-navigation/drawer';
import { Platform, StatusBar } from 'react-native';
import Colors from './colors';
import {_navigator} from './NavigationService';

const Drawer = createDrawerNavigator();
export default () => {
  useEffect(() => {
    Platform.OS == 'android' && StatusBar.setTranslucent(true);
    setTimeout(() => {
      Platform.OS == 'android' && StatusBar.setBackgroundColor('transparent');
      StatusBar.setBarStyle('dark-content');
    }, 1000);
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
        <Drawer.Screen name="Contact Us" component={AppStack} />
        <Drawer.Screen name="FAQ" component={AppStack} />
        <Drawer.Screen name="About Us" component={AppStack} />
        <Drawer.Screen name="Products" component={AppStack} />
        <Drawer.Screen name="Insurance" component={AppStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
