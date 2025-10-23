async function fetchList() {
  const res = await fetch(`/api/list?type=mind-maps`, { cache: 'no-store' });
  return (await res.json()).files as string[];
}

export default async function MindMapsPage() {
  const files = await fetchList();
  return (
    <section>
      <h2>Mind Maps</h2>
      {files.length === 0 ? (
        <p>No mind maps uploaded yet.</p>
      ) : (
        <ul>
          {files.map((f) => (
            <li key={f}><a href={`/_files/mind-maps/${encodeURIComponent(f)}`} target="_blank" rel="noreferrer">{f}</a></li>
          ))}
        </ul>
      )}
    </section>
  );
}
