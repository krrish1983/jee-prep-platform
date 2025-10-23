"use client";

import { useState } from 'react';

export default function AdminLoginPage() {
  const [key, setKey] = useState('');
  const [status, setStatus] = useState('');

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('Signing in...');
    const res = await fetch('/api/admin/login', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ key }) });
    setStatus(res.ok ? 'Signed in. Go to /admin' : 'Invalid key');
  }

  return (
    <section>
      <h2>Admin Login</h2>
      <form onSubmit={onSubmit}>
        <input type="password" placeholder="Admin key" value={key} onChange={(e)=>setKey(e.target.value)} />
        <button type="submit">Login</button>
      </form>
      <p>{status}</p>
    </section>
  );
}
