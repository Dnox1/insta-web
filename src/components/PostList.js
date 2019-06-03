import React from 'react'
import Post from './Post';

class PostList extends React.Component {
  state = {
    PostsAll: [] 
  }

render () {
  return (
    <div>
      <h2>Post List here</h2>
      <Post />
    </div>
  )
  
}
}


export default PostList