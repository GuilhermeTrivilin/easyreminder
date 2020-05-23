import React from 'react'

import Home from '~/pages/Main/Home'
import Start from '~/pages/FisrtEntry/Start'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Start' screenOptions={{ headerShown: false }} >
                <Stack.Screen name='Start' component={Start} />
                <Stack.Screen name='Home' component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}