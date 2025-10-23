import Link from 'next/link';

export default function PreparePage() {
  return (
    <section>
      <h2>Prepare & Practice</h2>
      <p>Filters and practice coming soon. For now, see uploaded questions and metadata.</p>
      <ul>
        <li>
          <Link href="/admin">Upload questions</Link>
        </li>
      </ul>
    </section>
  );
}
