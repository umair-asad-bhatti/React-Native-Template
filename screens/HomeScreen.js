import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../theme/ThemeProvider'
import { colors } from '../theme/colors'
import ScreenHead from '../components/ScreenHead'
import { SafeAreaView } from 'react-native-safe-area-context'
import { size } from '../constants/sizes'
import Button from '../components/Button'
import { AuthContext } from "../Context/AuthProvider";
export default function HomeScreen({ navigation }) {
    const { themeContainerStyle, themeTextStyle } = useContext(ThemeContext)
    const { setUser } = useContext(AuthContext)
    return (
        <SafeAreaView style={[{ flex: 1, padding: size.screenPadding }, themeContainerStyle]}>
            <ScreenHead title='Home Screen' />
            <Text style={{ color: colors.accentColor, fontSize: 20 }}>This is accent color</Text>
            <Button title={'Logout'} onPress={() => setUser(null)} />
        </SafeAreaView>
    )
}
