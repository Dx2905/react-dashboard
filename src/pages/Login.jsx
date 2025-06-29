import { useAuth } from '../context/AuthContext'

function Login() {
  const { login } = useAuth()

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Login Page</h1>
      <button
        onClick={login}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Login
      </button>
    </div>
  )
}

export default Login
