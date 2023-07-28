import React, { useContext } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeContext } from '../../context/ThemeContext'; 
import { colors, ThemeColors } from '../../constants/colors'; 

import CustomDrawer from '../../components/CustomDrawer';
import TabNavigator from '../Tab/TabNavigator';
import { Image } from 'react-native';
import imgCondaty from '../../assets/img/condaty.jpg' // TODO: arreglar esto.

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  const { theme } = themeContext;
  const currentTheme: ThemeColors[keyof ThemeColors] = colors[theme];

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          title: 'Inicio',
          headerStyle: {
            backgroundColor: currentTheme.background
          },
          headerTitle: '',
          headerTintColor: currentTheme.text,
          headerRight: () => (
              <Image
                source={imgCondaty}
                style={{ width: 40, height: 40, marginRight: 10 }}
              />
            ),
        }}
      >
          <Drawer.Screen name="Tab" component={TabNavigator}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
export default DrawerNavigator;