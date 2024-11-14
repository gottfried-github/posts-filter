import { Post as TypePost } from '../types/posts'
import styles from './Post.module.css'

interface Props {
  post: TypePost
  clickCb?: (post: TypePost) => void
}

const Post = ({ post, clickCb }: Props) => {
  const postClickCb = (ev: React.MouseEvent) => {
    if (!clickCb) return

    clickCb(post)
  }

  return (
    <div onClick={postClickCb || null} className={styles.container}>
      <div className={styles.title}>{post.title}</div>
      <div className={styles.body}>{post.body}</div>
    </div>
  )
}

export default Post
