
import React, {useContext, useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EnteryScreen from '../screens/EnteryScreen';
import LoginScreen from '../screens/LoginScreen';
import { ThemeContext } from '../theme/ThemeProvider';
import * as NavigationBar from 'expo-navigation-bar';
import { getSystemNavigationStyle } from '../theme/util';
import { StatusBar } from 'expo-status-bar';
import {AuthContext} from "../Context/AuthProvider";
const Stack = createNativeStackNavigator();
export default function StackNavigation() {
    const { colorScheme } = useContext(ThemeContext)
    NavigationBar.setBackgroundColorAsync(getSystemNavigationStyle(colorScheme));
    NavigationBar.setButtonStyleAsync(colorScheme == 'light' ? 'dark' : 'light')
    const {user} = useContext(AuthContext);
    return (

        <>
            <StatusBar style={colorScheme == 'light' ? 'dark' : 'light'} />
            <NavigationContainer>
                <Stack.Navigator initialRouteName='LoginScreen'>
                    {!user?
                    <Stack.Screen  name="LoginScreen" component={LoginScreen} options={{
                        headerShown: false,
                    }} />
                        :
                    <Stack.Screen name="EnteryScreen" component={EnteryScreen} options={{ headerShown: false }} />
                    }
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}