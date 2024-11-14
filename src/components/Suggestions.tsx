import { Post as TypePost } from '../types/posts'
import Post from './Post'
import styles from './Suggestions.module.css'

interface Props {
  suggestions: TypePost[]
  suggestionClickCb: (post: TypePost) => void
}

const Suggestions = ({ suggestions, suggestionClickCb }: Props) => {
  return (
    <div className={styles.container}>
      {suggestions.map(post => (
        <Post key={post.id} post={post} clickCb={suggestionClickCb} />
      ))}
    </div>
  )
}

export default Suggestions
