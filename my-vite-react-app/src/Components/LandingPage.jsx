import React, { useState } from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';



const LandingPage = () => {
  const useNav = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (username === 'adil' && password === '123zxc') {
      useNav('/')
    
    } else {
      alert('Mistake in username and password');
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LandingPage;
