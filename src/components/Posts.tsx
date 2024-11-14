import { useState, useMemo, useContext } from 'react'
import { PostsContext } from '../PostsContext'
import PostsPage from './PostsPage'

const Posts = () => {
  const posts = useContext(PostsContext)

  const [currentPage, setCurrentPage] = useState(0)

  // paginate posts
  const pages = useMemo(() => {
    const pages = []
    let i = 0

    while (i < posts.length + 1) {
      if (i % 10 === 0 && i > 0) {
        pages.push(posts.slice(i - 10, i))
      }

      i++
    }

    return pages
  }, [posts])

  const prevClickCb = () => {
    setCurrentPage(currentPage - 1)
  }

  const nextClickCb = () => {
    setCurrentPage(currentPage + 1)
  }

  return (
    <>
      {pages.length ? (
        <div>
          <div>
            <PostsPage posts={pages[currentPage]} />
          </div>
          <div>
            <button disabled={currentPage === 0} onClick={prevClickCb}>
              previous
            </button>
            <button disabled={currentPage === 9} onClick={nextClickCb}>
              next
            </button>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Posts
