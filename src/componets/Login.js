import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


const API = process.env.REACT_APP_API_URL;

function Login({ userId, setUserId }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  // Tracks whether the user is registering or logging in
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, [setUserId]);

  useEffect(() => {
    localStorage.setItem('userId', userId);
  }, [userId]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
  
    let userEndpoint = isRegistering ? 'register' : 'login';
    
    const addUser = (user) => {
      axios
        .post(`${API}/users/${userEndpoint}`, user)
        .then(
          (res) => {
            console.log(res.data.id);
            setUserId(res.data.id);
            navigate(`/userprofile/${res.data.id}`);
          },
          (error) => console.error(error)
        )
        .catch((c) => console.warn('catch', c));
    };
  
    let user = {
      email,
      password,
    };
  
    if (isRegistering) {
      user.confirmPassword = confirmPassword;
    }
  
    addUser(user);
  };
  



  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <form onSubmit={handleFormSubmit} style={{width: '100%', padding: '0.5 em;'}}>
        <h1 style={{marginBottom: '50px'}}>{isRegistering ? 'Register' : 'Log In'}</h1>
        <div className="input" style={{width: '350px', justifyContent: 'center', fontSize: '15px', left: '550px', marginBottom: '50px', backgroundColor: '#5271FF', marginLeft: '220px'}}>
          <label htmlFor="email" className="input__label">Email:</label>
          <input
            class='input__input'
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            style={{border: 'none', outline: 'none', left: '30px', bottom: '0px', width: '240px', backgroundColor: '#5271FF'}}
          />
          <small></small>
        </div>
        <div className="input" style={{width: '350px', justifyContent: 'center', fontSize: '15px', left: '550px', marginBottom: '50px', backgroundColor: '#5271FF', marginLeft: '220px'}}>
          <label htmlFor="password" className="input__label">Password:</label>
          <input
            class='input__input'
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            style={{border: 'none', outline: 'none', left: '60px', bottom: '0px', width: '210px', backgroundColor: '#5271FF'}}
          />
          <small></small>
        </div>
        {isRegistering && (
          <div className="field">
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirm your Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <small></small>
          </div>
        )}
        <button type="submit" className='borderman btn-border' style={{border: 'none', outline: 'none', padding: '10px', backgroundColor: '#F18701', borderRadius: '5px', width: '175px', height: '50px', fontSize: '20px', color: '#FFFFFF'}}>{isRegistering ? 'Register' : 'Log In'}</button>
      </form>
      <p style={{margin: '30px'}}>
        {isRegistering ? (
          <>
            <h4 style={{textAlign: 'center'}}>Already have an account?{' '}</h4>
            <button onClick={handleFormSubmit} className='borderman btn-border' style={{border: 'none', outline: 'none', padding: '10px', backgroundColor: '#F18701', width: '175px', height: '50px', fontSize: '20px', color: '#FFFFFF'}}>Log In</button>
          </>
        ) : (
          <>
            <h4 style={{textAlign: 'center'}}>Don't have an account?</h4> <button className='borderman btn-border' style={{border: 'none', outline: 'none', padding:'10px', backgroundColor: '#F18701', borderRadius: '5px', width: '175px', height: '50px', fontSize: '20px', color: '#FFFFFF'}}>Register</button>
          </>
        )}
      </p>
    </div>
  );
}

export default Login;