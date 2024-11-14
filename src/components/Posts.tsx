import { useContext } from 'react'
import { PostsContext } from '../PostsContext'

const Posts = () => {
  const posts = useContext(PostsContext)

  return <div>posts</div>
}

export default Posts
