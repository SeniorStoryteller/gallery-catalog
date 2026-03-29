import { useParams, Link } from 'react-router-dom';
import artists from '../data/artists.json';

/** Turn superscript markers like ¹ ² ³ into <sup> elements */
function renderWithFootnotes(text) {
  const parts = text.split(/([\u00B9\u00B2\u00B3\u2074\u2075\u2076])/g);
  return parts.map((part, i) => {
    if (/^[\u00B9\u00B2\u00B3\u2074\u2075\u2076]$/.test(part)) {
      return <sup key={i} className="footnote-ref">{part}</sup>;
    }
    return part;
  });
}

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

  const sources = artist.profile?.sources;

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
          {artist.quote && (
            <blockquote className="artist-profile__quote">
              &ldquo;{artist.quote}&rdquo;
            </blockquote>
          )}
        </div>
      </div>

      {artist.profile?.sections?.map((section, i) => (
        <section key={i} className="artist-profile__section">
          <h2>{section.heading}</h2>
          {section.items ? (
            <ul className="artist-profile__list">
              {section.items.map((item, j) => (
                <li key={j}>{renderWithFootnotes(item)}</li>
              ))}
            </ul>
          ) : (
            section.text.split('\n\n').map((para, j) => (
              <p key={j}>{renderWithFootnotes(para)}</p>
            ))
          )}
        </section>
      ))}

      <div className="artist-profile__cta">
        <Link to={`/artists/${artist.id}`} className="btn-primary">
          View Works in Collection
        </Link>
      </div>

      {sources && sources.length > 0 && (
        <section className="artist-profile__sources">
          <h2>Sources</h2>
          <ol>
            {sources.map((source, i) => (
              <li key={i}>{source}</li>
            ))}
          </ol>
        </section>
      )}
    </main>
  );
}
