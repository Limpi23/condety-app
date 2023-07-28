import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Access from '../../../screens/Access/Access';

const Stack = createNativeStackNavigator();

const AccessStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen name="Access" component={Access} />
        </Stack.Navigator>
    )
}
export default AccessStackNavigator;