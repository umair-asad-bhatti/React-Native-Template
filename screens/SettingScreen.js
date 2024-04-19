import { View, Text, StyleSheet } from 'react-native'
import React, { useContext, useMemo, useState } from 'react'
import { ThemeContext } from '../theme/ThemeProvider'
import BouncyCheckboxGroup from "react-native-bouncy-checkbox-group";
import { colors } from '../theme/colors';
import ScreenHead from '../components/ScreenHead';
import { size } from '../constants/sizes';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';
export default function SettingScreen() {
    const { themeContainerStyle, themeTextStyle, setUserThemePref, colorScheme, userThemePref } = useContext(ThemeContext)
    const staticData = [
        {
            id: '0',
            text: 'Dark Theme',
            fillColor: colors.secondaryColor,
            unfillColor: colorScheme == 'light' ? colors.lightContainerBg : colors.darkContainerBg,
            value: 'dark',
            textStyle: {
                textDecorationLine: "none",
            }
        },
        {
            id: '1',
            text: 'Light theme',
            fillColor: colors.secondaryColor,
            unfillColor: colorScheme == 'light' ? colors.lightContainerBg : colors.darkContainerBg,
            value: 'light',
            textStyle: {
                textDecorationLine: "none",
            }
        },
        {
            id: '2',
            text: 'System theme',
            fillColor: colors.secondaryColor,
            unfillColor: colorScheme == 'light' ? colors.lightContainerBg : colors.darkContainerBg,
            value: 'system',
            textStyle: {
                textDecorationLine: "none",
            }

        },
    ]
    return (
        <SafeAreaView style={[{ flex: 1, padding: size.screenPadding }, themeContainerStyle]}>
            <ScreenHead title='Settings Screen' />
            <BannerAd
                unitId={adUnitId}
                size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
            />
            <BouncyCheckboxGroup
                initial={
                    userThemePref == 'system' ? '2' : (
                        userThemePref == 'dark' ? '0' : '1'
                    )
                }
                style={{ flexDirection: "column", gap: 8 }}
                data={staticData}
                onChange={(selectedItem) => {
                    setUserThemePref(selectedItem.value)
                    //update the preference in local storage as well
                }}
            />

        </SafeAreaView>
    )
}

