import React from 'react'

import Preload from '~/pages/Preload'

import FirstEntryHome from '~/pages/FisrtEntry'
import FirstEntryStart from '~/pages/FisrtEntry/Start'

import Home from '~/pages/Main/Home'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Connected = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home} />
        </Tab.Navigator>
    )
}

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }} >
                <Stack.Screen name='Preload' component={Preload} />
                <Stack.Screen name='FirstEntryHome' component={FirstEntryHome} />
                <Stack.Screen name='FirstEntryStart' component={FirstEntryStart} />
                <Stack.Screen name='Connected' component={Connected} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}