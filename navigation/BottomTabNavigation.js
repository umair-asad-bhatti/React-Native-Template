import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import { useContext } from 'react';
import { ThemeContext } from '../theme/ThemeProvider';
import { colors } from '../theme/colors';
import { Home, Setting2 } from 'iconsax-react-native';
const Tab = createBottomTabNavigator();
const iconSize = 25;
export default function BottomTabNavigation() {
    const { themeContainerStyle, themeTextStyle } = useContext(ThemeContext)
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' }, tabBarStyle: { borderTopWidth: 0, shadowColor: 'white', ...themeContainerStyle, height: 60, padding: 5, }, tabBarActiveTintColor: colors.secondaryColor }} >
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({ focused, color }) => {
                    return <Home size={iconSize} variant={focused ? 'Bold' : 'Outline'} color={color} />
                },
            }} />
            <Tab.Screen name="Settings" component={SettingScreen} options={{
                tabBarIcon: ({ focused, color }) => {
                    return <Setting2 size={iconSize} variant={focused ? 'Bold' : 'Outline'} color={color} />
                },
            }} />
        </Tab.Navigator >
    );
}