
import React, { createContext, useEffect, useState } from 'react'
const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    //set and fetch the theme preference from local storage
    const [user,setUser]=useState(null)
    return (
        <AuthContext.Provider value={{user,setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider,AuthContext }
