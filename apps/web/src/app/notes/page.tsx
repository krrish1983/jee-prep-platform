async function fetchList(type: 'lecture-notes' | 'mind-maps') {
  const res = await fetch(`/api/list?type=${type}`, { cache: 'no-store' });
  return (await res.json()).files as string[];
}

export default async function NotesPage() {
  const files = await fetchList('lecture-notes');
  return (
    <section>
      <h2>Lecture Notes</h2>
      {files.length === 0 ? (
        <p>No lecture notes uploaded yet.</p>
      ) : (
        <ul>
          {files.map((f) => (
            <li key={f}><a href={`/_files/lecture-notes/${encodeURIComponent(f)}`} target="_blank" rel="noreferrer">{f}</a></li>
          ))}
        </ul>
      )}
    </section>
  );
}
