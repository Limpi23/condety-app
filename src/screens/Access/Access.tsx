import { View, StyleSheet, Text } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'; 
import { colors, ThemeColors } from '../../constants/colors'; 

const Access = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  const { theme } = themeContext;
  const currentTheme: ThemeColors[keyof ThemeColors] = colors[theme];

  return (
      <View style={[styles.container, { backgroundColor: currentTheme.backgroundBody}]}>
        <Text style={{ color: currentTheme.cardText}}>Pronto Habra Novedades!</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Access; 