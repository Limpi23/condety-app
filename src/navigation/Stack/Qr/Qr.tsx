import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Qr from '../../../screens/Qr/Qr';

const Stack = createNativeStackNavigator();

const QrStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen name="Qr" component={Qr} />
        </Stack.Navigator>
    )
}
export default QrStackNavigator;