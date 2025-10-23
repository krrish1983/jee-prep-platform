"use client";

import { useEffect, useState } from 'react';

export default function AdminTestsPage() {
  const [items, setItems] = useState<any[]>([]);
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const [name, setName] = useState('New Test');
  const [kind, setKind] = useState<'grand'|'topicwise'|'live'>('grand');
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetch('/api/questions', { cache: 'no-store' })
      .then(r=>r.json()).then(d=>setItems(d.items||[]));
  }, []);

  async function create() {
    const questionFiles = Object.keys(selected).filter(k=>selected[k]);
    setStatus('Creating...');
    const res = await fetch('/api/tests', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ name, kind, questionFiles }) });
    setStatus(res.ok ? 'Created' : 'Failed');
  }

  return (
    <section>
      <h2>Admin: Create Test (from uploaded questions)</h2>
      <div style={{ display:'flex', gap:8, alignItems:'center', margin:'8px 0' }}>
        <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Test name" />
        <select value={kind} onChange={(e)=>setKind(e.target.value as any)}>
          <option value="grand">Grand</option>
          <option value="topicwise">Topicwise</option>
          <option value="live">Live</option>
        </select>
        <button onClick={create}>Create Test</button>
      </div>
      <p style={{color:'#555'}}>Select questions to include:</p>
      <ul>
        {items.map((it:any)=> (
          <li key={it.file}>
            <label>
              <input type="checkbox" checked={!!selected[it.file]} onChange={(e)=>setSelected({ ...selected, [it.file]: e.target.checked })} />
              <span style={{ marginLeft:8 }}>{it.file}</span>
            </label>
            {it.meta && (
              <small style={{ marginLeft:8, color:'#555' }}>
                [{it.meta.chapter} · {it.meta.exam} · {it.meta.difficulty} · {it.meta.type}]
              </small>
            )}
          </li>
        ))}
      </ul>
      <p>{status}</p>
    </section>
  );
}
