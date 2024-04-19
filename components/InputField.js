import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import { colors } from '../theme/colors'
import { Eye, EyeSlash } from 'iconsax-react-native'
import { ThemeContext } from '../theme/ThemeProvider'
export default function InputField({ children, value, setValue, placeholder, type = 'text' }) {
    const [showPassword, setShowPassword] = useState(true)
    const { colorScheme, themeTextStyle } = useContext(ThemeContext)
    return (
        <View style={styles.input}>
            {children}
            <TextInput style={[themeTextStyle, { width: '75%' }]} placeholder={placeholder} placeholderTextColor={colorScheme == 'dark' ? colors.lightColor : 'black'} secureTextEntry={type.toLowerCase().trim() == 'password' && !showPassword} />
            <View style={styles.eye}>
                {type.toLowerCase().trim() == 'password' && (
                    !showPassword ? <Eye size="23" color={colors.secondaryColor} onPress={() => setShowPassword(true)} /> : <EyeSlash size="23" color={colors.secondaryColor} onPress={() => setShowPassword(false)} />
                )}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        borderColor: colors.secondaryColor,
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 2,
        backgroundColor: colors.lightSecondaryColor
    },
    eye: {
        width: 30
    }
})