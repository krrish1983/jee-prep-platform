"use client";

import { useState } from 'react';

export default function AdminPage() {
  const [type, setType] = useState<'lecture-notes' | 'mind-maps' | 'questions'>('lecture-notes');
  const [file, setFile] = useState<File | null>(null);
  const [meta, setMeta] = useState({ chapter: '', topic: '', exam: 'JEE Mains', difficulty: 'Medium', type: 'Single' });
  const [status, setStatus] = useState<string>('');

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!file) return;
    setStatus('Uploading...');
    const fd = new FormData();
    fd.set('file', file);
    if (type === 'questions') fd.set('meta', JSON.stringify(meta));
    const res = await fetch(`/api/upload?type=${type}`, { method: 'POST', body: fd });
    if (res.ok) setStatus('Uploaded!'); else setStatus('Failed');
  }

  return (
    <section>
      <h2>Admin Upload</h2>
      <form onSubmit={onSubmit}>
        <label>
          Type:
          <select value={type} onChange={(e) => setType(e.target.value as any)}>
            <option value="lecture-notes">Lecture Notes</option>
            <option value="mind-maps">Mind Maps</option>
            <option value="questions">Questions</option>
          </select>
        </label>
        <br />
        <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
        {type === 'questions' && (
          <div style={{ marginTop: 8 }}>
            <input placeholder="Chapter" value={meta.chapter} onChange={(e) => setMeta({ ...meta, chapter: e.target.value })} />
            <input placeholder="Topic" value={meta.topic} onChange={(e) => setMeta({ ...meta, topic: e.target.value })} />
            <select value={meta.exam} onChange={(e) => setMeta({ ...meta, exam: e.target.value })}>
              <option>JEE Mains</option>
              <option>JEE Advanced</option>
              <option>Olympiad</option>
            </select>
            <select value={meta.difficulty} onChange={(e) => setMeta({ ...meta, difficulty: e.target.value })}>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
            <select value={meta.type} onChange={(e) => setMeta({ ...meta, type: e.target.value })}>
              <option>Single</option>
              <option>Multiple</option>
              <option>Integer</option>
              <option>Paragraph</option>
              <option>Matrix</option>
            </select>
          </div>
        )}
        <br />
        <button type="submit">Upload</button>
      </form>
      <p>{status}</p>
    </section>
  );
}
