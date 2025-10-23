type TileProps = {
  title: string;
  color?: 'primary' | 'secondary' | 'tertiary' | 'blue' | 'slate';
  icon?: React.ReactNode;
  href?: string;
};

export default function Tile({ title, color = 'primary', icon, href }: TileProps) {
  const className = `tile ${color}`;
  const inner = (
    <div className={className}>
      <div className="title">{title}</div>
      <div className="icon">{icon}</div>
    </div>
  );
  if (href) return <a className={className} href={href}>{inner.props.children}</a>;
  return inner;
}
