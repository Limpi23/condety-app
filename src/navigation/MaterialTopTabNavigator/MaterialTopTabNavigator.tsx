import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AccessStackNavigator from '../Stack/Access/Access';
import { ThemeContext } from '../../context/ThemeContext'; 
import { colors, ThemeColors } from '../../constants/colors'; 
import { useContext } from 'react';
import QrStackNavigator from '../Stack/Qr/Qr';
import OrdersStackNavigator from '../Stack/Orders/OrdersStack';

const Tab = createMaterialTopTabNavigator();

const HistoryTabsStack = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  const { theme } = themeContext;
  const currentTheme: ThemeColors[keyof ThemeColors] = colors[theme];

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: currentTheme.backgroundBody,
          borderBottomColor: currentTheme.textCondety,
        },
        tabBarActiveTintColor: currentTheme.textCondety, 
        tabBarInactiveTintColor: currentTheme.text, 
        tabBarIndicatorStyle: {
          backgroundColor: currentTheme.textCondety, 
        },
      }}
    >
      <Tab.Screen name="Access" options={{ title:"Accesos" }} component={AccessStackNavigator} />
      <Tab.Screen name="Qr" component={QrStackNavigator} />
      <Tab.Screen name="Orders" options={{ title: 'Pedidos'}} component={OrdersStackNavigator} />
    </Tab.Navigator>
  );
};

export default HistoryTabsStack;
