import React, { useState, useEffect } from 'react'
import { PostsContext } from './PostsContext'
import Posts from './components/Posts'

import './App.css'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const posts = await res.json()

      setPosts(posts)
    }

    getPosts()
  }, [])

  return (
    <div className="App">
      <PostsContext.Provider value={posts}>
        {/* <Search /> */}
        <Posts />
      </PostsContext.Provider>
    </div>
  )
}

export default App
