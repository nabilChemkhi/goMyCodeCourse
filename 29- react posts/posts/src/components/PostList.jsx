import React from 'react'
import Post from './post' // Assure-toi que le chemin est correct

const PostList = (props) => {
  return (
    <div>
        
        <ul>
            {props.posts.map(post => (
            <li key={post.id}>
                <Post post={post} />
            </li>
            ))}
        </ul>
    </div>
  )
}

export default PostList
