import React from 'react'

const Signup = () => {
  return (
 <div className="container mt-4 signup-container">
      <form action="/signup" method="POST" className="form-group">

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nom</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            className="form-control" 
            placeholder="Entrez votre nom" 
            required 
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            className="form-control" 
            placeholder="Entrez votre email" 
            required 
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Mot de passe</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            className="form-control" 
            placeholder="Entrez votre mot de passe" 
            required 
          />
        </div>

        <button type="submit" className="btn btn-primary">S'inscrire</button>
      </form>
    </div>
  )
}

export default Signup
