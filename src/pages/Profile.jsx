import Layout from '../components/Layout'

function Profile() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold text-blue-700 mb-2">Profile Page</h1>
      <p className="text-gray-700">👤 Name: John Doe</p>
      <p className="text-gray-700">📧 Email: johndoe@example.com</p>
      <p className="text-gray-700">🔐 Role: Admin</p>

    </Layout>
  )
}

export default Profile
