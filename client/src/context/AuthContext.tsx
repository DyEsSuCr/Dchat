'use client'

import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext({
  isAuthenticated: false,
  accessToken: '',
  logout: () => {},
  saveToken: (token: string) => {}
})

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [accessToken, setAccessToken] = useState<string>('')

  const logout = () => {
    setIsAuthenticated(false)
    setAccessToken('')
    localStorage.removeItem('token')
  }

  const saveToken = (token: string) => {
    setAccessToken(token)
    localStorage.setItem('token', JSON.stringify(token))
  }

  const getLocalAccessToken = (): string | null => {
    const localToken = localStorage.getItem('token')
    if (!localToken) return null
    return JSON.parse(localToken)
  }

  const checkAuth = () => {
    const token = getLocalAccessToken()

    if (token) {
      saveToken(token)
      setIsAuthenticated(true)
    } else {
      logout()
    }
  }

  useEffect(() => {
    checkAuth()
  }, [])

  return (
    <AuthContext.Provider value={{ isAuthenticated, accessToken, logout, saveToken }}>
      {children}
    </AuthContext.Provider>
  )
}
