import { Post } from '../types/posts'

interface Props {
  posts: Post[]
}

const PostsPage = ({ posts }: Props) => {
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>{post.body}</div>
      ))}
    </div>
  )
}

export default PostsPage
