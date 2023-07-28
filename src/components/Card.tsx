import { View, Text, StyleSheet, StyleProp, TextStyle } from 'react-native';
import React, { useContext, ReactNode } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import { ThemeContext } from '../context/ThemeContext'; 
import { colors, ThemeColors } from '../constants/colors'; 

interface CardProps {
  icon: string;
  title: string;
  subtitle: string;
  titleColor?: string;
  children: ReactNode,
}

const Card: React.FC<CardProps> = ({ icon, title, titleColor, subtitle, children }) => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  const { theme } = themeContext;
  const currentTheme: ThemeColors[keyof ThemeColors] = colors[theme];
  

const titleStyle: StyleProp<TextStyle> = {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
    color: titleColor ?? currentTheme.cardHeaderText,
  };

  return (
          <View style={[styles.card, { backgroundColor: currentTheme.cardBackground }]}>
            {/* Header */}
            <View style={[styles.header, { backgroundColor: currentTheme.cardHeaderBackground }]}>
              <Icon name={icon} size={20} color={titleColor ?? currentTheme.cardHeaderText} style={styles.iconSpacing} />
              <View style={styles.textContainer}>
              <Text style={[styles.headerTextTitles, titleStyle ]}>{title}</Text>
              <Text style={[styles.headerTextSubtitles, { color: currentTheme.cardHeaderText }]}>{subtitle}</Text>
              </View>
            </View>

            {/* Body */}
            <View style={[styles.body, { backgroundColor: currentTheme.cardBackground }]}>
              <View style={styles.listContainer}>
                {children}
              </View>
            </View>
          </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    marginBottom: 20,
        shadowColo: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  header: {
    flexDirection: 'row',
    padding: 10,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  body: {
    padding: 10,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  headerTextTitles: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  headerTextSubtitles: {
    fontSize: 10,
    fontWeight: 'normal',
    marginHorizontal: 10,
  },
  listContainer: {
    flexDirection: 'column',
  },
  listItem: {
    paddingVertical: 5,
  },
  iconSpacing: {
    marginRight: 5,
    paddingTop: 5,
  },
  textContainer: {
    alignItems: 'center',
  }
});

export default Card