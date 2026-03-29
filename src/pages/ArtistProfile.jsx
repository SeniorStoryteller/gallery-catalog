import { useParams, Link } from 'react-router-dom';
import artists from '../data/artists.json';

/** Turn superscript markers like ¹ ² ³ into clickable (1) (2) (3) links.
 *  Single superscript digits map directly; multi-digit markers like ¹⁰ ¹¹
 *  are matched as two-character sequences first. */
function renderWithFootnotes(text, sources) {
  const digitVal = { '\u00B9': 1, '\u00B2': 2, '\u00B3': 3, '\u2074': 4, '\u2075': 5, '\u2076': 6, '\u2077': 7, '\u2078': 8, '\u2079': 9, '\u2070': 0 };
  // Match multi-digit superscript sequences (e.g. ¹⁰, ¹¹) or single digits
  const superDigit = '[\u00B9\u00B2\u00B3\u2070\u2074-\u2079]';
  const pattern = new RegExp(`(${superDigit}{2,}|${superDigit})`, 'g');
  const parts = text.split(pattern);
  return parts.map((part, i) => {
    if (part.length > 0 && [...part].every(ch => ch in digitVal)) {
      const num = [...part].reduce((acc, ch) => acc * 10 + digitVal[ch], 0);
      const idx = num - 1; // sources array is 0-based
      const source = sources?.[idx];
      if (source?.url) {
        return (
          <a key={i} href={source.url} target="_blank" rel="noopener noreferrer" className="footnote-ref">
            ({num})
          </a>
        );
      }
      return <span key={i} className="footnote-ref">({num})</span>;
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
                <li key={j}>{renderWithFootnotes(item, sources)}</li>
              ))}
            </ul>
          ) : (
            section.text.split('\n\n').map((para, j) => (
              <p key={j}>{renderWithFootnotes(para, sources)}</p>
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
              <li key={i}>
                {source.url ? (
                  <a href={source.url} target="_blank" rel="noopener noreferrer">
                    {source.label}
                  </a>
                ) : (
                  source.label
                )}
              </li>
            ))}
          </ol>
        </section>
      )}
    </main>
  );
}
