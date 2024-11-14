import React, { useState, useEffect } from 'react'

import { Post } from './types/posts'
import { PostsContext } from './PostsContext'
import Posts from './components/Posts'

import './App.css'

function App() {
  const [posts, setPosts] = useState<Post[]>([])

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
