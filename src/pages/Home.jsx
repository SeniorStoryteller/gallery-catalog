import { useState, useMemo } from 'react';
import ArtworkCard from '../components/ArtworkCard';
import artworks from '../data/artworks.json';
import artists from '../data/artists.json';

const categories = ['All', ...new Set(artworks.map((a) => a.category))];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');

  const artistMap = useMemo(
    () => Object.fromEntries(artists.map((a) => [a.id, a])),
    [],
  );

  const filtered =
    activeCategory === 'All'
      ? artworks
      : artworks.filter((a) => a.category === activeCategory);

  return (
    <main className="page">
      <section className="hero">
        <h1>The Collection</h1>
        <p>Explore works from our represented artists</p>
      </section>

      <div className="filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="artwork-grid">
        {filtered.map((artwork) => (
          <ArtworkCard
            key={artwork.id}
            artwork={artwork}
            artist={artistMap[artwork.artistId]}
          />
        ))}
      </div>
    </main>
  );
}
