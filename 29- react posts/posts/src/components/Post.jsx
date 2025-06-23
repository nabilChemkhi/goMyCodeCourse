import React from 'react'

const Post = ( {post}) => {
  return (
    <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p><strong>Author:</strong> {post.author}</p>
        <p><strong>Date:</strong> {new Date(post.date).toLocaleDateString()}</p>
        {/* Ajoute d'autres champs si nécessaire */}
    </div>
  )
}

export default Post
