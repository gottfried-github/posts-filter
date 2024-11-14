import { Post as TypePost } from '../types/posts'
import styles from './Post.module.css'

interface Props {
  post: TypePost
}

const Post = ({ post }: Props) => {
  return (
    <div key={post.id} className={styles.container}>
      <div className={styles.title}>{post.title}</div>
      <div className={styles.body}>{post.body}</div>
    </div>
  )
}

export default Post
