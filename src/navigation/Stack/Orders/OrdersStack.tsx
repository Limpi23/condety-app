import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Orders from '../../../screens/Orders/Orders';

const Stack = createNativeStackNavigator();

const OrdersStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen name="Orders" component={Orders} />
        </Stack.Navigator>
    )
}
export default OrdersStackNavigator;