import React from 'react'
import { View, Text, Image, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import ThemeSwitch from './ThemeSwitch';

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <View style={{flex: 1}}>
    <DrawerContentScrollView {...props} 
      contentContainerStyle={{ backgroundColor: '#F3F3F3' }}>
        <View style={{ padding: 20 }}>
        <Image
            source={require('../assets/img/user.png')}
            style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
          />
          <Text
            style={{
              color: '#808080',
              fontSize: 12,
              fontFamily: 'Roboto-Medium',
              marginBottom: 5,
            }}>
            Jonathan Barrero
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: '#808080',
                fontSize: 12,
                fontFamily: 'Roboto-Regular',
                marginRight: 5,
              }}>
              Condominio Las Palmas
            </Text>
            <Icon name="id-card" size={14} color="#808080" />
          </View>
        </View>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
    </DrawerContentScrollView>
    <View style={{ padding: 20 }}>
        <ThemeSwitch />
    </View>
    <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="facebook" size={22} color="#808080" />
            <Text
              style={{
                fontSize: 15,
                color: '#808080',
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              Comparte
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="logout-variant" size={22} color="#808080" />
            <Text
              style={{
                fontSize: 15,
                color: '#808080',
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              Salir
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CustomDrawer