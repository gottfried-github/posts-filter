import { useState, useContext } from 'react'
import { Post } from '../types/posts'
import { PostsContext } from '../PostsContext'
import Suggestions from './Suggestions'

const matchPosts = (v: string, posts: Post[]) => {
  const matches: Post[] = []

  if (v.length) {
    posts.forEach(post => {
      if (post.title.slice(0, v.length).toUpperCase() === v.toUpperCase()) {
        matches.push(post)
      }
    })
  }

  return matches
}

const Search = () => {
  const posts = useContext(PostsContext)

  const [searchInputValue, setSearchInputValue] = useState<string>('')
  const [isSearchInputActive, setIsSearchInputActive] = useState<boolean>(false)
  const [matches, setMatches] = useState<Post[]>([])

  const searchInputInputEvCb = (ev: React.SyntheticEvent<HTMLInputElement>) => {
    if (!isSearchInputActive) {
      setIsSearchInputActive(true)
    }

    const v = (ev.target as HTMLInputElement).value

    setMatches(matchPosts(v, posts))
    setSearchInputValue(v)
  }

  const searchInputFocusCb = () => {
    if (!isSearchInputActive) {
      setIsSearchInputActive(true)
    }
  }

  // const searchInputBlurCb = () => {
  //   if (isSearchInputActive) {
  //     setIsSearchInputActive(false)
  //   }
  // }

  const suggestionClickCb = (post: Post) => {
    setMatches(matchPosts(post.title, posts))
    setSearchInputValue(post.title)
  }

  const searchButtonClickCb = () => {
    if (!matches.length) return

    if (isSearchInputActive) {
      setIsSearchInputActive(false)
    }

    setSearchInputValue('')

    const match = matches[0]

    setMatches([])

    alert(match.title)
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={searchInputValue}
          onInput={searchInputInputEvCb}
          onFocus={searchInputFocusCb}
          // onBlur={searchInputBlurCb}
        />
        <button onClick={searchButtonClickCb}>Search</button>
      </div>
      {isSearchInputActive && matches.length ? (
        <Suggestions suggestions={matches} suggestionClickCb={suggestionClickCb} />
      ) : null}
    </div>
  )
}

export default Search
