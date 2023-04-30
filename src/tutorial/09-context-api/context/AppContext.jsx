//import createContext to create contextApi
import React, { createContext, useContext, useState } from 'react'
//using createContext which returns us provider and consumer we use useContext instead of consumer
export const userContext = createContext()

export const UserContextProvider = ({ children }) => {
  //define all the state you wanted to provide/pass through this context
  const [user, setUser] = useState({ name: 'bob' })
  const handleLogout = () => {
    setUser(null)
  }

  //below are the states I wanted to pass to my child components
  const state = { user, logout: handleLogout }

  return <notesContext.Provider value={state}>{children}</notesContext.Provider>
}

export const useUserContext = () => {
  const { user, logout } = useContext(userContext)
}
