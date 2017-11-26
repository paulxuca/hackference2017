import React from 'react';
import {TabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import MeasureScreen from '../containers/measure';
import RecommendationsScreen from './recommendations';

const NAVIGATOR_CONFIG = {
    tabBarPosition: 'bottom'
};

const Navigator = TabNavigator({
    measure: {
        screen: MeasureScreen,
        navigationOptions: {
            tabBarLabel: 'Measure',
            tabBarIcon: ({focused, tintColor}) => <Icon name="eye" color={focused ? tintColor : '#D2D2D2'} size={20}/>
        }
    },
    recommendations: {
        screen: RecommendationsScreen,
        navigationOptions: {
            tabBarLabel: 'Recommendations',
            tabBarIcon: ({focused, tintColor}) => <Icon name="rocket" color={focused ? tintColor : '#f0f0f0'} size={20}/>
        }
    },
}, NAVIGATOR_CONFIG);

export default Navigator;
