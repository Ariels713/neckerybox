import React, { useState, useEffect } from 'react'
import firebase from '../../firebase/firebase'

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    firebase.auth().onAuthStateChanged(setCurrentUser)
    console.log(currentUser)
  }, [])
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
