import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";

const Signup = () => {
const { register, handleSubmit, formState: { errors } } = useForm();
// State variables to hold form data    


const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleNameChange = (e) => {
  setName(e.target.value);
};

const handleEmailChange = (e) => {
  setEmail(e.target.value);
};

const handlePasswordChange = (e) => {
  setPassword(e.target.value);
};

const handleSubmit1 = (e) => {
    const formData = {
        name: name,
        email: email,
        password: password
        };

        console.log('Form Data:', formData);

    e.preventDefault(); // Prevent the default form submission
    // Here you can handle the form submission, e.g., send data to a server
};

  return (
 <div className="container mt-4 signup-container">
      <form action="/signup" method="POST" className="form-group" onSubmit={handleSubmit}>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nom</label>
          <input 
          value={name}
            onChange={handleNameChange}
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
          value={email}
            onChange={handleEmailChange}id="email" 
            name="email" 
            className="form-control" 
            placeholder="Entrez votre email" 
            required 
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Mot de passe</label>
          <input 
            value={password}
            onChange={handlePasswordChange}
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
