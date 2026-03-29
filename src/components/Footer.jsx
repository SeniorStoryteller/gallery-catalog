import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <Link to="/" className="site-footer__name">The Orchard Galleries on 25</Link>
        <p className="site-footer__info">
          February 28 &ndash; May 2, 2026<br />
          Bella Feldman &middot; Joseph Slusky &middot; Art of the African Diaspora
        </p>
      </div>
    </footer>
  );
}
