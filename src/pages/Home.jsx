import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import ArtworkCard from '../components/ArtworkCard';
import artworks from '../data/artworks.json';
import artists from '../data/artists.json';

export default function Home() {
  const artistMap = useMemo(
    () => Object.fromEntries(artists.map((a) => [a.id, a])),
    [],
  );

  return (
    <main>
      {/* Hero */}
      <section className="landing-hero">
        <div className="landing-hero__image">
          <img
            src="/artworks/bella-feldman-hero-image.jpg"
            alt="Bella Feldman seated beside a monumental forged steel sculpture"
          />
        </div>
        <div className="landing-hero__text">
          <p className="landing-hero__dates">February 28 – May 2, 2026</p>
          <h1>Bella Feldman</h1>
          <p className="landing-hero__subtitle">
            Six decades of forged steel and blown glass
          </p>
          <div className="landing-hero__artists">
            <span>Also showing</span>
            <p>Joseph Slusky · Art of the African Diaspora</p>
          </div>
          <Link to="/artists/bella-feldman" className="landing-hero__cta">
            View Collection →
          </Link>
        </div>
      </section>

      {/* Works grid */}
      <section className="page">
        <h2 className="section-heading">Selected Works</h2>
        <div className="artwork-grid">
          {artworks.map((artwork) => (
            <ArtworkCard
              key={artwork.id}
              artwork={artwork}
              artist={artistMap[artwork.artistId]}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
