import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Metrics from '../../../screens/Metrics/Metrics';

const Stack = createNativeStackNavigator();

const MetricsStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen name="Metrics" component={Metrics} />
        </Stack.Navigator>
    )
}
export default MetricsStackNavigator;