"use client";

import { useEffect, useMemo, useState } from 'react';

type Item = { file: string; meta?: { chapter?: string; exam?: string; difficulty?: string; type?: string } };

export default function QuestionBankPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [filters, setFilters] = useState({ chapter: '', exam: '', difficulty: '', type: '' });
  const [loading, setLoading] = useState(false);

  const params = new URLSearchParams();
  (['chapter','exam','difficulty','type'] as const).forEach((k) => {
    const v = (filters as any)[k];
    if (v) params.set(k, v);
  });

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    fetch('/api/questions?' + params.toString(), { cache: 'no-store' })
      .then((r) => r.json())
      .then((d) => { if (!ignore) setItems(d.items || []); })
      .finally(() => { if (!ignore) setLoading(false); });
    return () => { ignore = true; };
  }, [params.toString()]);

  const chapters = useMemo(() => Array.from(new Set(items.map(i => i.meta?.chapter).filter(Boolean))), [items]);
  const exams = ['JEE Mains','JEE Advanced','Olympiad'];
  const diffs = ['Easy','Medium','Hard'];
  const types = ['Single','Multiple','Integer','Paragraph','Matrix'];

  return (
    <section>
      <h2>Question Bank</h2>
      <div style={{ display:'flex', gap:12, flexWrap:'wrap', margin:'8px 0 16px' }}>
        <select value={filters.chapter} onChange={(e)=>setFilters({ ...filters, chapter: e.target.value })}>
          <option value="">All Chapters</option>
          {chapters.map((c:string)=> <option key={c} value={c}>{c}</option>)}
        </select>
        <select value={filters.exam} onChange={(e)=>setFilters({ ...filters, exam: e.target.value })}>
          <option value="">All Exams</option>
          {exams.map(c=> <option key={c} value={c}>{c}</option>)}
        </select>
        <select value={filters.difficulty} onChange={(e)=>setFilters({ ...filters, difficulty: e.target.value })}>
          <option value="">All Difficulty</option>
          {diffs.map(c=> <option key={c} value={c}>{c}</option>)}
        </select>
        <select value={filters.type} onChange={(e)=>setFilters({ ...filters, type: e.target.value })}>
          <option value="">All Types</option>
          {types.map(c=> <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
      {loading ? <p>Loading...</p> : (
        items.length === 0 ? <p>No questions found.</p> : (
          <ul>
            {items.map((it) => (
              <li key={it.file}>
                <a href={`/_files/questions/${encodeURIComponent(it.file)}`} target="_blank" rel="noreferrer">{it.file}</a>
                {it.meta && (
                  <small style={{ marginLeft:8, color:'#555' }}>
                    [{it.meta.chapter} · {it.meta.exam} · {it.meta.difficulty} · {it.meta.type}]
                  </small>
                )}
              </li>
            ))}
          </ul>
        )
      )}
    </section>
  );
}
