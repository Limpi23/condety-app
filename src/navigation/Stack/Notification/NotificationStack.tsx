import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Notification from '../../../screens/Notification/Notification';

const Stack = createNativeStackNavigator();

const NotificationStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen name="Notification" component={Notification} />
        </Stack.Navigator>
    )
}
export default NotificationStackNavigator;