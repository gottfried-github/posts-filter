import { createContext } from 'react'
import { Post } from './types/posts'

export const PostsContext = createContext<Post[]>([])
