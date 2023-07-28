import { View, TextInput, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { colors, ThemeColors } from '../../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const Qr = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  const { theme } = themeContext;
  const currentTheme: ThemeColors[keyof ThemeColors] = colors[theme];

  return (
    <View style={[styles.container, { backgroundColor: currentTheme.backgroundBody }]}>
      <View style={[styles.searchContainer, { backgroundColor: currentTheme.cardHeaderBackground }]}>
        <Icon 
          name="search" 
          size={20} 
          color={currentTheme.text} 
          style={styles.searchIcon} 
        />
        <TextInput
          placeholder="Buscar"
          placeholderTextColor={currentTheme.text}
          style={[styles.searchInput, { color: currentTheme.text }]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 10,
    margin: 10,
  },
  searchIcon: {
    marginRight: 5,
  },
  searchInput: {
    flex: 1,
  },
});

export default Qr;
