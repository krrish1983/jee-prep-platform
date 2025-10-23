async function fetchList() {
  const res = await fetch(`/api/list?type=dpps`, { cache: 'no-store' });
  return (await res.json()).files as string[];
}

export default async function DppsPage() {
  const files = await fetchList();
  return (
    <section>
      <h2>DPPs</h2>
      {files.length === 0 ? (
        <p>No DPPs uploaded yet.</p>
      ) : (
        <ul>
          {files.map((f) => (
            <li key={f}><a href={`/_files/dpps/${encodeURIComponent(f)}`} target="_blank" rel="noreferrer">{f}</a></li>
          ))}
        </ul>
      )}
    </section>
  );
}
