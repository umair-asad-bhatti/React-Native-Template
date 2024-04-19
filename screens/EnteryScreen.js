import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import BottomTabNavigation from '../navigation/BottomTabNavigation'


export default function EnteryScreen() {


    return (
        <View style={{ flex: 1 }}>
            <BottomTabNavigation />
        </View>
    )
}