import React from 'react'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from '~/commons'

import Preload from '~/pages/Preload'

import FirstEntryHome from '~/pages/FisrtEntry'
import FirstEntryStart from '~/pages/FisrtEntry/Start'

import Countdown from '~/pages/Main/Countdown'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Connected = () => {

    MaterialCommunityIcons.loadFont()

    return (
        <Tab.Navigator
            tabBarOptions={
                {
                    activeTintColor: colors.red,
                    inactiveTintColor: 'gray',
                    style: {
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderTopWidth: 0.8,
                        borderColor: 'gray',
                    },
                }
            }
        >
            <Tab.Screen
                name='Countdown'
                component={Countdown}
                options={{
                    tabBarLabel: 'Countdown',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="restore-clock" color={color} size={25} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Preload' screenOptions={{ headerShown: false }} >
                <Stack.Screen name='Preload' component={Preload} />
                <Stack.Screen name='FirstEntryHome' component={FirstEntryHome} />
                <Stack.Screen name='FirstEntryStart' component={FirstEntryStart} />
                <Stack.Screen name='Connected' component={Connected} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}