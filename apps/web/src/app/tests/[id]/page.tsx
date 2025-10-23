import path from 'node:path';
import fs from 'node:fs/promises';
import { notFound } from 'next/navigation';

async function fetchTest(id: string) {
  const res = await fetch(`/api/tests?id=${id}`, { cache: 'no-store' });
  if (!res.ok) return null;
  return (await res.json()) as { id:string, name:string, questionFiles:string[] };
}

export default async function TestPage({ params }: { params: { id: string } }) {
  const test = await fetchTest(params.id);
  if (!test) notFound();
  return (
    <section>
      <h2>{test.name}</h2>
      <p>Questions:</p>
      <ol>
        {test.questionFiles.map((f) => (
          <li key={f}><a href={`/_files/questions/${encodeURIComponent(f)}`} target="_blank" rel="noreferrer">{f}</a></li>
        ))}
      </ol>
      <p style={{color:'#666'}}>Note: Tests are built from uploaded question files. Scoring is not yet implemented.</p>
    </section>
  );
}
