import React, { useContext, useRef } from 'react'
import { View,   Animated,  } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeStackNavigator from '../Stack/Home/HomeStack';
import { ThemeContext } from '../../context/ThemeContext'; 
import { colors, ThemeColors } from '../../constants/colors'; 
import HistoryStackNavigator from '../Stack/History/HistoryStack';
import NotificationStackNavigator from '../Stack/Notification/NotificationStack';
import MetricsStackNavigator from '../Stack/Metrics/MetricsStack';
import WarningStackNavigator from '../Stack/Warning/WarningStack';
import HistoryTabsStack from '../MaterialTopTabNavigator/MaterialTopTabNavigator';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  const { theme } = themeContext;
  const currentTheme: ThemeColors[keyof ThemeColors] = colors[theme];

  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
        <Tab.Navigator initialRouteName='Home' screenOptions={{
          tabBarStyle: {
            backgroundColor: currentTheme.background 
          }
        }}>
         <Tab.Screen
          name={'Inicio'}
          component={HomeStackNavigator}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  position: 'absolute',
                }}>
                <Icon
                  name="home"
                  size={20}
                  color={focused ? '#00FF9D' : 'gray'}></Icon>
              </View>
            ),
          }}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}></Tab.Screen>
         <Tab.Screen
          name={'Historial'}
          component={HistoryTabsStack}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  position: 'absolute',
                }}>
                <Icon
                  name="history"
                  size={20}
                  color={focused ? '#00FF9D' : 'gray'}></Icon>
              </View>
            ),
          }}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}></Tab.Screen>
         <Tab.Screen
          name={'Notification'}
          component={NotificationStackNavigator}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  position: 'absolute',
                }}>
                <Icon
                  name="bell"
                  size={20}
                  color={focused ? '#00FF9D' : 'gray'}></Icon>
              </View>
            ),
          }}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}></Tab.Screen>
         <Tab.Screen
          name={'Metrics'}
          component={MetricsStackNavigator}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  position: 'absolute',
                }}>
                <Icon
                  name="chart-bar"
                  size={20}
                  color={focused ? '#00FF9D' : 'gray'}></Icon>
              </View>
            ),
          }}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}></Tab.Screen>
         <Tab.Screen
          name={'Warning'}
          component={WarningStackNavigator}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  position: 'absolute',
                }}>
                <Icon
                  name="exclamation-triangle"
                  size={20}
                  color={focused ? '#00FF9D' : 'gray'}></Icon>
              </View>
            ),
          }}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}></Tab.Screen>
        </Tab.Navigator>
  )
}

export default TabNavigator