import React, { useContext } from 'react';
import { View, Switch, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import { ThemeContext } from '../context/ThemeContext';

const ThemeSwitch = () => {
  const context = useContext(ThemeContext);

  if (!context) return null;

  const { theme, setTheme } = context;

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        <Icon name="alarm-light-outline" size={15} color="#808080" style={styles.icon} />
        <Text style={styles.text}>Claro</Text>
      </View>
      <Switch value={theme === 'dark'} onValueChange={toggleTheme} />
      <View style={styles.switchContainer}>
        <Text style={styles.text}>Oscuro</Text>
        <Icon name="alarm-light-off" size={15} color="#808080" style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    color: '#808080',
    marginLeft: 5, 
  },
  icon: {
    marginLeft: 5, 
  },
});

export default ThemeSwitch;
