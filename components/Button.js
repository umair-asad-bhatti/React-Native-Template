import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'
export default function Button({ title, onPress, disabled = false }) {
    return (
        <TouchableOpacity disabled={disabled} onPress={onPress} style={styles.btn}>
            <Text style={styles.btnText}>{title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    btn: {
        backgroundColor: colors.lightAccentColor,
        paddingVertical: 15,
        borderRadius: 12
    },
    btnText: {
        color: colors.accentColor,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15
    }
})