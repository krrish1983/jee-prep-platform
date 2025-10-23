import Tile from '@/components/Tile';

export default function Page() {
  return (
    <div className="container">
      <div className="section">
        <h2>Prepare & Practice</h2>
        <div className="grid cols-3">
          <Tile title="Physics" color="primary" icon={<span>⚛️</span>} href="/prepare?cat=physics" />
          <Tile title="Chemistry" color="secondary" icon={<span>🧪</span>} href="/prepare?cat=chemistry" />
          <Tile title="Maths" color="tertiary" icon={<span>📐</span>} href="/prepare?cat=mathematics" />
        </div>
      </div>

      <div className="section">
        <h2>Analyse, Compete & Discuss</h2>
        <div className="grid cols-4">
          <Tile title="Performance" color="slate" icon={<span>📊</span>} href="/performance" />
          <Tile title="Competitors" color="slate" icon={<span>👥</span>} href="/competitors" />
          <Tile title="SocialWall" color="slate" icon={<span>💬</span>} href="/social" />
          <Tile title="Messages" color="slate" icon={<span>✉️</span>} href="/messages" />
        </div>
      </div>

      <div className="section">
        <h2>Test Series</h2>
        <div className="grid cols-2">
          <Tile title="VIEW MORE" color="blue" icon={<span>⬅️</span>} href="/tests/series/1" />
          <Tile title="VIEW MORE" color="blue" icon={<span>➡️</span>} href="/tests/series/2" />
        </div>
        <div className="grid cols-2" style={{ marginTop: 16 }}>
          <Tile title="Grand Tests" color="slate" icon={<span>📝</span>} href="/tests/grand" />
          <Tile title="Topicwise Tests" color="slate" icon={<span>✅</span>} href="/tests/topicwise" />
        </div>
      </div>
    </div>
  );
}
