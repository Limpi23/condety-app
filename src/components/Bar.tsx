import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../context/ThemeContext'; 
import { colors, ThemeColors } from '../constants/colors'; 

interface BarProps {
  quantity: number;
  color: string;
  title: string;
  maxQuantity: number;
}

const Bar: React.FC<BarProps> = ({ quantity, color, title, maxQuantity }) => {
  const fillRatio = quantity / maxQuantity;

  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  const { theme } = themeContext;
  const currentTheme: ThemeColors[keyof ThemeColors] = colors[theme];


  return (
    <View>
      <Text style={[styles.title, {color: currentTheme.cardHeaderText}]}>{title}</Text>
      <View style={styles.viewContainer}>
        <View style={styles.barContainer}>
          <View style={[styles.bar, { width: '100%', backgroundColor: 'gray' }]} />
          <View style={[styles.bar, { width: `${fillRatio * 100}%`, backgroundColor: color }]} />
        </View>
        <View style={styles.textContainer}>
          <Text style={{...styles.text, color: color}}>{quantity}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  barContainer: {
    flex: 1, 
    height: 5,
    borderRadius: 15,
    overflow: 'hidden',
    flexDirection: 'row', 
  },
  bar: {
    height: '100%',
    borderRadius: 50,
    position: 'absolute', 
    top: 0, 
  },
  textContainer: {
    width: 40, 
  },
  text: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'right',
  },
  title: {
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default Bar;
