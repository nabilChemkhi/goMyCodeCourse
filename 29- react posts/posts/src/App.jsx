import React, { useEffect, useState } from 'react';
import httpClient from './services/httpService'; // Assure-toi que ce fichier exporte bien `httpClient`
import PostList from './components/postList'; // Assure-toi que le chemin est correct
const App = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    httpClient.get('/posts')
      .then(response => {
        setPosts(response.data);
        console.log("Posts fetched successfully:", response.data);
      })
      .catch(error => {
        console.error("Error fetching posts:", error);
      });
  };

  useEffect(() => {
    // httpClient.get('/posts')
    //   .then(response => {
    //     setPosts(response.data);
    //     console.log("Posts fetched successfully:", response.data);
    //   })
    //   .catch(error => {
    //     console.error("Error fetching posts:", error);
    //   });
    fetchPosts();
  }, []);

  return (
    <div>
      {/* <h1>Liste des Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li> // Adapte selon la structure des données
        ))}
      </ul> */}
      <h1>Liste des Posts</h1>
      <PostList posts={posts} /> 
      {/* Assure-toi que `postList` est correctement importé et utilisé */}
    </div>
  );
}

export default App;
