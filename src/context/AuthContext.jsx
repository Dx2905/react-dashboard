import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const storedToken = localStorage.getItem('token')
    if (storedToken) setToken(storedToken)
  }, [])

  const login = () => {
    const fakeToken = '1234567890'
    localStorage.setItem('token', fakeToken)
    setToken(fakeToken)
    toast.success('Login successful!')
    navigate('/dashboard')
  }

  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
    toast('Logged out', { icon: '👋' })
    navigate('/')
  }

  const isAuthenticated = !!token

  return (
    <AuthContext.Provider value={{ token, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
