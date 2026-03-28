import { useParams, Link } from 'react-router-dom';
import ArtworkCard from '../components/ArtworkCard';
import artists from '../data/artists.json';
import artworks from '../data/artworks.json';

export default function ArtistDetail() {
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

  const works = artworks.filter((a) => a.artistId === artist.id);

  return (
    <main className="page artist-detail">
      <Link to="/artists" className="back-link">← Back to artists</Link>

      <section className="artist-detail__header">
        <img
          src={artist.portrait}
          alt={artist.name}
          className="artist-detail__portrait"
        />
        <div>
          <h1>{artist.name}</h1>
          <p className="artist-detail__bio">{artist.bio}</p>
          {artist.profile && (
            <Link to={`/artists/${artist.id}/profile`} className="artist-detail__profile-link">
              Full Profile →
            </Link>
          )}
        </div>
      </section>

      <h2>Works in Collection ({works.length})</h2>

      <div className="artwork-grid">
        {works.map((artwork) => (
          <ArtworkCard key={artwork.id} artwork={artwork} artist={artist} />
        ))}
      </div>
    </main>
  );
}
