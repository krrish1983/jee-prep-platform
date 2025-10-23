import Link from 'next/link';
import { usePathname } from 'next/navigation';

const items = [
  { href: '/', label: 'Home', group: 'PREPARE & PRACTICE' },
  { href: '/prepare?cat=physics', label: 'Physics' },
  { href: '/prepare?cat=chemistry', label: 'Chemistry' },
  { href: '/prepare?cat=mathematics', label: 'Mathematics' },
  { href: '/live-tests', label: 'Live Tests' },
  { divider: true },
  { group: 'ANALYSE, COMPETE & DISCUSS' },
  { href: '/performance', label: 'Performance' },
  { href: '/competitors', label: 'Competitors' },
  { href: '/social', label: 'SocialWall' },
  { href: '/messages', label: 'Messages' },
  { divider: true },
  { group: 'PURCHASE PLANS & INFO' },
  { href: '/purchase', label: 'Purchase' },
];

export default function Sidebar() {
  const pathname = usePathname();
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
