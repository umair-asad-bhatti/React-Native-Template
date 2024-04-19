
import { theme } from '../theme/theme';
import { colors } from './colors';
export function getThemeTextStyle(colorScheme) {
    return colorScheme === 'light' ? theme.lightThemeText : theme.darkThemeText;
}

export function getThemeContainerStyle(colorScheme) {
    return colorScheme === 'light' ? theme.lightContainer : theme.darkContainer;
}
export function getSystemNavigationStyle(colorScheme) {
    return colorScheme === 'light' ? colors.lightContainerBg : colors.darkContainerBg;
}
