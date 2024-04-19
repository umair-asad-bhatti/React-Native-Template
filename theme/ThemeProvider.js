import { useColorScheme } from "react-native";
import React, { createContext, useEffect, useState } from 'react'
import { getThemeContainerStyle, getThemeTextStyle } from "./util";
const ThemeContext = createContext()
const ThemeProvider = ({ children }) => {
    //set and fetch the theme preference from local storage
    const [userThemePref, setUserThemePref] = useState('system')

    let colorScheme = useColorScheme()
    colorScheme = userThemePref == 'system' ? colorScheme : userThemePref;
    const themeTextStyle = getThemeTextStyle(colorScheme);
    const themeContainerStyle = getThemeContainerStyle(colorScheme);
    return (
        <ThemeContext.Provider value={{ userThemePref, colorScheme, setUserThemePref, themeTextStyle, themeContainerStyle }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider }
