'use client'
import React, { useState } from 'react'
import { createContext } from 'react'


export const AppContext = createContext()

const Context = ({children}) => {
    const [cartItems, setCartItems] = useState([])

  return (
    <AppContext.Provider value={{cartItems, setCartItems}}>
        {children}
    </AppContext.Provider>
  )
}

export default Context