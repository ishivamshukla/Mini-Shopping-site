import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the login data to the server
  }

  return (
    <div>
      <h1>Login Here</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Email or Mobile:</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required /><br /><br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br /><br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default LoginPage;
