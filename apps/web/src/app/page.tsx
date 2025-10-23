import Tile from '@/components/Tile';

export default function Page() {
  return (
    <div className="container">
      <div className="section">
        <h2>Prepare & Practice (Maths)</h2>
        <div className="grid cols-4">
          <Tile title="Lecture Notes" color="primary" icon={<span>📄</span>} href="/notes" />
          <Tile title="Mind Map" color="secondary" icon={<span>🧠</span>} href="/mind-maps" />
          <Tile title="DPPs" color="tertiary" icon={<span>🗂️</span>} href="/dpps" />
          <Tile title="Question Bank" color="blue" icon={<span>📚</span>} href="/question-bank" />
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
        <div className="grid cols-2" style={{ marginTop: 0 }}>
          <Tile title="Grand Tests" color="slate" icon={<span>📝</span>} href="/tests/grand" />
          <Tile title="Topicwise Tests" color="slate" icon={<span>✅</span>} href="/tests/topicwise" />
        </div>
        <div className="grid cols-2" style={{ marginTop: 16 }}>
          <Tile title="Live Tests" color="slate" icon={<span>📺</span>} href="/live-tests" />
          <Tile title="Admin: Create Tests" color="blue" icon={<span>⚙️</span>} href="/admin/tests" />
        </div>
      </div>
    </div>
  );
}
