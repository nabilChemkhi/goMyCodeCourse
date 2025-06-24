import React, { useEffect, useState } from 'react';
import httpClient from './services/httpService'; // Assure-toi que ce fichier exporte bien `httpClient`
import PostList from './components/postList'; // Assure-toi que le chemin est correct
const App = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const hundleTitleChange = (e) => {
    setTitle(e.target.value);
    console.log("Title changed:", e.target.value);
  };

  const hundleAuthorChange = (e) => {
    setAuthor(e.target.value);
    console.log("Author changed:", e.target.value);
  };

   const handleSubmit = (e) => {
    e.preventDefault();
    // use the collected data as an object
    console.log('Form data:', { title, author });
    // Example: send it to an API or use it elsewhere
    const newPost = {
      title: title,
      author: author,
    };

    //post request to the server
    httpClient.post('/posts', newPost)
      .then(response => {
        console.log("Post created successfully:", response.data);
        // Optionally, you can fetch the updated posts list after creating a new post
fetchPosts();
      })
      .catch(error => {
        console.error("Error creating post:", error);
      }); 

//update UI posts
    setPosts([...posts, newPost]);

    // //post request to the server
    // httpClient.post('/posts', newPost)
    //   .then(response => {
    //     console.log("Post created successfully:", response.data);
    //     // Optionally, you can fetch the updated posts list after creating a new post
    //     fetchPosts();
    //   })
    //   .catch(error => {
    //     console.error("Error creating post:", error);
    //   });
  };

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
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title: </label>
          <input
            id="title"
            type="text"
            className="form-control"
            placeholder="Entrer le titre"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="author">Author: </label>
          <input
            id="author"
            type="text"
            className="form-control"
            placeholder="Entrer l'auteur"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">Ajouter</button>
      </form>



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
