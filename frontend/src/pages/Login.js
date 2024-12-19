import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest, loginSuccess, loginFailure } from '../features/userSlice';
import { loginUser } from '../api/api';

function Login() {
  const dispatch = useDispatch();
  const { user, status, error } = useSelector((state) => state.user || { user: null, status: 'idle', error: null });


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    dispatch(loginRequest());
    try {
      const res = await loginUser(email, password);
      dispatch(loginSuccess(res.data));
    } catch (err) {
      dispatch(loginFailure('Invalid credentials'));
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {status === 'loading' && <p>Logging in...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
