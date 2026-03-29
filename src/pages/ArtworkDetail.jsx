import { useParams, Link } from 'react-router-dom';
import artworks from '../data/artworks.json';
import artists from '../data/artists.json';

export default function ArtworkDetail() {
  const { id } = useParams();
  const artwork = artworks.find((a) => a.id === id);

  if (!artwork) {
    return (
      <main className="page">
        <h2>Artwork not found</h2>
        <Link to="/">Back to collection</Link>
      </main>
    );
  }

  const artist = artists.find((a) => a.id === artwork.artistId);

  return (
    <main className="page artwork-detail">
      <Link to="/" className="back-link">← Back to collection</Link>

      <div className="artwork-detail__layout">
        <div className="artwork-detail__image">
          <img src={artwork.image} alt={artwork.title} />
        </div>

        <div className="artwork-detail__info">
          <h1>{artwork.title}</h1>
          <Link to={`/artists/${artist?.id}/profile`} className="artwork-detail__artist">
            {artist?.name}
          </Link>

          <dl className="artwork-detail__meta">
            {artwork.year && <><dt>Year</dt><dd>{artwork.year}</dd></>}
            <dt>Medium</dt>
            <dd>{artwork.medium}</dd>
            {artwork.dimensions && <><dt>Dimensions</dt><dd>{artwork.dimensions}</dd></>}
            <dt>Category</dt>
            <dd>{artwork.category}</dd>
          </dl>

          {artwork.price != null && (
            <p className="artwork-detail__price">
              ${artwork.price.toLocaleString()}
            </p>
          )}

          <p className="artwork-detail__description">{artwork.description}</p>

          <button className="btn-primary">Inquire About This Work</button>
        </div>
      </div>
    </main>
  );
}
