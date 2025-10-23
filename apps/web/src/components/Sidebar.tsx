'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  return (
    <div>
      <div className="nav-group">
        <img alt="logo" src="/logo.svg" style={{ height: 36 }} />
      </div>
      <div className="nav-group">
        <div className="nav-group-title">PREPARE & PRACTICE</div>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/prepare?cat=physics">Physics</NavLink>
        <NavLink href="/prepare?cat=chemistry">Chemistry</NavLink>
        <NavLink href="/prepare?cat=mathematics">Mathematics</NavLink>
        <NavLink href="/live-tests">Live Tests</NavLink>
      </div>
      <div className="nav-group">
        <div className="nav-group-title">ANALYSE, COMPETE & DISCUSS</div>
        <NavLink href="/performance">Performance</NavLink>
        <NavLink href="/competitors">Competitors</NavLink>
        <NavLink href="/social">SocialWall</NavLink>
        <NavLink href="/messages">Messages</NavLink>
      </div>
      <div className="nav-group">
        <div className="nav-group-title">PURCHASE PLANS & INFO</div>
        <NavLink href="/purchase">Purchase</NavLink>
      </div>
    </div>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link className={`nav-item ${active ? 'active' : ''}`} href={href}>
      <span>{children}</span>
    </Link>
  );
}
