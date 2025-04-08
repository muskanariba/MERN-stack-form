import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace this with your Vercel backend URL
    axios.post('https://server-i7y8xrebj-areeba-muskans-projects.vercel.app/login', { email, password })  
      .then(result => {
        console.log(result);
        navigate('/dashboard'); // Redirect to dashboard after login
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="bg-white p-4 rounded shadow" style={{ width: '300px' }}>
        <h4 className="text-center mb-3">Login</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            className="form-control mb-2"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            className="form-control mb-3"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-success w-100 mb-2">Login</button>
          <p className="text-center mb-1">Don't Have an Account?</p>
          <Link to="/register" className="btn btn-light w-100 border">Register</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
