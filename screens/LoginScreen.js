import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ThemeContext } from '../theme/ThemeProvider'
import Button from '../components/Button'
import InputField from '../components/InputField'
import { size } from '../constants/sizes'
import { Lock, Login, Subtitle } from 'iconsax-react-native'
import { colors } from '../theme/colors'
import LottieView from 'lottie-react-native';
import {AuthContext} from "../Context/AuthProvider";
export default function LoginScreen({ navigation }) {

    const { themeContainerStyle, themeTextStyle, colorScheme } = useContext(ThemeContext)
    const {setUser}=useContext(AuthContext)
    return (
        <SafeAreaView style={[themeContainerStyle, styles.mainContainer]}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <LottieView style={{ width: 200, height: 200 }} source={require('../assets/loginanimation.json')} autoPlay loop />
            </View>
            <Text style={[themeTextStyle, styles.mainHeading]}>Welcome Back!</Text>
            <InputField placeholder={'Email*'} type='text' >
                <Subtitle size="24" color={colors.secondaryColor} />
            </InputField>
            <InputField placeholder={'Password*'} type='password' >
                <Lock size="24" color={colors.secondaryColor} />
            </InputField>
            <Text style={{ textAlign: 'right', color: colors.secondaryColor, fontWeight: 'bold', textDecorationLine: 'underline' }}>Forgot password</Text>
            <Button onPress={() => setUser({id:1,name:'umair'})} title={'Login'} />
            <Text style={{ textAlign: 'center', color: colors.secondaryColor, fontWeight: 'bold', textDecorationLine: 'underline', marginVertical: 10 }}>Dont have an account? sign up here</Text>

        </SafeAreaView >
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: size.screenPadding, gap: 25,

    },
    mainHeading: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    logo: {
        alignItems: 'center'
    }
})