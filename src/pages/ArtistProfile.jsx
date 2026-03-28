import { useParams, Link } from 'react-router-dom';
import artists from '../data/artists.json';

export default function ArtistProfile() {
  const { id } = useParams();
  const artist = artists.find((a) => a.id === id);

  if (!artist) {
    return (
      <main className="page">
        <h2>Artist not found</h2>
        <Link to="/artists">Back to artists</Link>
      </main>
    );
  }

  return (
    <main className="page artist-profile">
      <Link to={`/artists/${artist.id}`} className="back-link">
        ← Back to artist
      </Link>

      <div className="artist-profile__hero">
        <img
          src={artist.portrait}
          alt={artist.name}
          className="artist-profile__portrait"
        />
        <div>
          <h1>{artist.name}</h1>
          {artist.years && (
            <p className="artist-profile__years">{artist.years}</p>
          )}
        </div>
      </div>

      {artist.profile?.sections?.map((section, i) => (
        <section key={i} className="artist-profile__section">
          <h2>{section.heading}</h2>
          {section.items ? (
            <ul className="artist-profile__list">
              {section.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          ) : (
            section.text.split('\n\n').map((para, j) => (
              <p key={j}>{para}</p>
            ))
          )}
        </section>
      ))}

      <div className="artist-profile__cta">
        <Link to={`/artists/${artist.id}`} className="btn-primary">
          View Works in Collection
        </Link>
      </div>
    </main>
  );
}
