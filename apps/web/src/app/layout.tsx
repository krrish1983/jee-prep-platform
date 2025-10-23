import './globals.css';
import Sidebar from '@/components/Sidebar';

export const metadata = {
  title: 'JEE Prep Platform',
  description: 'Prepare & Practice, Olympiad, Notes, Mind Maps, Admin',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="root">
        <header className="topbar">
          <div className="container">
            <strong>All India Competition - IITs, NECC and State Level Engineering Colleges</strong>
          </div>
        </header>
        <div className="layout">
          <aside className="sidebar">
            <Sidebar />
          </aside>
          <main className="content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
