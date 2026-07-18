import React, { useState } from 'react';

export default function LoginGate({ onSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [checking, setChecking] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setChecking(true);
    setError('');

    setTimeout(() => {
      const emailOk = "admin@ourfamily.com" === email.trim().toLowerCase();
      const passwordOk = "secret123" === password;

      if (emailOk && passwordOk) {
        localStorage.setItem('familyEmail', email.trim());
        localStorage.setItem('familyPassword', password);
        setChecking(false);
        onSuccess(); 
      } else {
        setError('Wrong email or password.');
        setChecking(false);
      }
    }, 500); 
  };

  return (
    <div className="gate-screen">
      <form className="gate-card" onSubmit={handleSubmit}>
        <h2>Our Family Memories</h2>
        <p>Sign in to continue.</p>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          autoComplete="username"
          autoFocus
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        {error && <div className="gate-error">{error}</div>}
        <button type="submit" disabled={checking}>
          {checking ? 'Checking...' : 'Sign in'}
        </button>
      </form>
    </div>
  );
}