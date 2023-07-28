import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStackNavigator from './Home/HomeStack';
import HistoryStackNavigator from './History/HistoryStack';
import NotificationStackNavigator from './Notification/NotificationStack';
import MetricsStackNavigator from './Metrics/MetricsStack';
import WarningStackNavigator from './Warning/WarningStack';

const StackNavigator = () => {
    return(
        <NavigationContainer>
            <HomeStackNavigator />
            <HistoryStackNavigator />
            <NotificationStackNavigator />
            <MetricsStackNavigator />
            <WarningStackNavigator />
        </NavigationContainer>
    )
}

export default StackNavigator