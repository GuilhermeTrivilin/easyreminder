import React from 'react'

import FirstEntryHome from '~/pages/FisrtEntry'
import FirstEntryStart from '~/pages/FisrtEntry/Start'

import Home from '~/pages/Main/Home'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name='FirstEntryHome' component={FirstEntryHome} />
                <Stack.Screen name='FirstEntryStart' component={FirstEntryStart} />
                <Stack.Screen name='Home' component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}