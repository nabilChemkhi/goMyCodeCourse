import React from 'react'

const Post = ( {post}) => {
  return (
    // <div>
    //     <h2>{post.title}</h2>
    //     <p>{post.body}</p>
    //     <p><strong>Author:</strong> {post.author}</p>
    //     <p><strong>Date:</strong> {new Date(post.date).toLocaleDateString()}</p>
    //     {/* Ajoute d'autres champs si nécessaire */}
    // </div>

    <div
  style={{
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '16px',
    marginBottom: '20px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  }}
>
  <h2>{post.title}</h2>
  <p>{post.body}</p>
  <p><strong>Author:</strong> {post.author}</p>
  <p><strong>Date:</strong> {new Date(post.date).toLocaleDateString()}</p>
</div>
    
  )
}

export default Post
