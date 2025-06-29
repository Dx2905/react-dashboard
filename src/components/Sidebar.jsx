import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Sidebar() {
  const { logout } = useAuth()
  const location = useLocation()
  const [open, setOpen] = useState(false)

  const linkClasses = (path) =>
    `block py-2 px-4 rounded hover:bg-blue-50 ${
      location.pathname === path ? 'font-bold text-blue-600' : 'text-gray-700'
    }`

  return (
    <>
      {/* Mobile Top Navbar */}
      <div className="lg:hidden flex items-center justify-between p-4 shadow bg-white">
        <h2 className="text-xl font-bold text-blue-600">My Dashboard</h2>
        <button onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-64 bg-white shadow p-6 flex flex-col transform transition-transform duration-200 z-50 ${
        open ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:static`}>
        <h2 className="text-2xl font-bold text-blue-600 mb-8 hidden lg:block">My Dashboard</h2>
        <nav className="flex flex-col gap-4">
          <Link to="/dashboard" className={linkClasses('/dashboard')} onClick={() => setOpen(false)}>
            Dashboard
          </Link>
          <Link to="/profile" className={linkClasses('/profile')} onClick={() => setOpen(false)}>
            Profile
          </Link>
          <button
            onClick={() => {
              logout()
              setOpen(false)
            }}
            className="text-left text-red-500 hover:text-red-700 mt-auto"
          >
            Logout
          </button>
        </nav>
      </aside>
    </>
  )
}

export default Sidebar
