import { Post as TypePost } from '../types/posts'
import Post from './Post'
import styles from './PostsPage.module.css'

interface Props {
  posts: TypePost[]
}

const PostsPage = ({ posts }: Props) => {
  return (
    <div className={styles.pageContainer}>
      {posts.map(post => (
        <Post post={post} />
      ))}
    </div>
  )
}

export default PostsPage
