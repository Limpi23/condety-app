import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface HeaderProps {
  navigation: NavigationProp<any>;
}

const Header = ({ navigation }: HeaderProps) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.menuIcon}
        onPress={() => navigation.openDrawer()}>
        <FontAwesome name="bars" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Mi Aplicación</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FA5353',
    height: 64,
    paddingHorizontal: 16,
  },
  menuIcon: {
    marginRight: 16,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Header;
