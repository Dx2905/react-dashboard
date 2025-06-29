import Sidebar from './Sidebar'

function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 lg:ml-64 p-6 bg-gray-50 min-h-screen">
        {children}
      </main>
    </div>
  )
}

export default Layout
