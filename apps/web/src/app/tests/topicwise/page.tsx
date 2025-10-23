async function fetchTests(kind: 'grand'|'topicwise'|'live') {
  const res = await fetch(`/api/tests?kind=${kind}`, { cache: 'no-store' });
  return (await res.json()).items as { id:string, name:string }[];
}

export default async function Page() {
  const items = await fetchTests('topicwise');
  return (
    <section>
      <h2>Topicwise Tests</h2>
      {items.length === 0 ? <p>No tests yet.</p> : (
        <ul>
          {items.map(t => (<li key={t.id}><a href={`/tests/${t.id}`}>{t.name}</a></li>))}
        </ul>
      )}
    </section>
  );
}
