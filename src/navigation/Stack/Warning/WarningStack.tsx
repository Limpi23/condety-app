import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Warning from '../../../screens/Warning/Warning';

const Stack = createNativeStackNavigator();

const WarningStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen name="Warning" component={Warning} />
        </Stack.Navigator>
    )
}
export default WarningStackNavigator;