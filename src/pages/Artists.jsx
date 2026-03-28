import { Link } from 'react-router-dom';
import artists from '../data/artists.json';
import artworks from '../data/artworks.json';

export default function Artists() {
  return (
    <main className="page">
      <section className="hero">
        <h1>Our Artists</h1>
        <p>Meet the artists we represent</p>
      </section>

      <div className="artists-grid">
        {artists.map((artist) => {
          const count = artworks.filter(
            (a) => a.artistId === artist.id,
          ).length;
          return (
            <div key={artist.id} className="artist-card">
              <Link to={`/artists/${artist.id}`}>
                <img src={artist.portrait} alt={artist.name} />
                <div className="artist-card__info">
                  <h3>{artist.name}</h3>
                  <p>
                    {count} work{count !== 1 ? 's' : ''} in collection
                  </p>
                </div>
              </Link>
              {artist.profile && (
                <Link
                  to={`/artists/${artist.id}/profile`}
                  className="artist-card__profile-link"
                >
                  Full Profile →
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}
