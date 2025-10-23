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
        <NavLink href="/notes">Lecture Notes</NavLink>
        <NavLink href="/mind-maps">Mind Map</NavLink>
        <NavLink href="/dpps">DPPs</NavLink>
        <NavLink href="/question-bank">Question Bank</NavLink>
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
        <div className="nav-group-title">ADMIN</div>
        <NavLink href="/admin">Upload</NavLink>
        <NavLink href="/admin/tests">Create Tests</NavLink>
        <NavLink href="/admin/login">Login</NavLink>
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
