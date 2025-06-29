import Layout from '../components/Layout'
import { useEffect, useState } from 'react'
import api from '../services/api'

function Dashboard() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get('/posts?_limit=5')
      .then(res => setPosts(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4 text-green-700">Dashboard</h1>

      {loading ? (
        <p className="text-gray-500 animate-pulse">Loading posts...</p>
      ) : (
        <ul className="space-y-3">
          {posts.map(post => (
            <li key={post.id} className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-600">{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </Layout>
  )
}

export default Dashboard
