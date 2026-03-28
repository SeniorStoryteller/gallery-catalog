import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="site-header__logo">
          The Orchard Galleries on 25
        </Link>
        <nav className="site-header__nav">
          <NavLink to="/" end>Collection</NavLink>
          <NavLink to="/artists">Artists</NavLink>
        </nav>
      </div>
    </header>
  );
}
