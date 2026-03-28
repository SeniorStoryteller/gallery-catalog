import { Link } from 'react-router-dom';

export default function ArtworkCard({ artwork, artist }) {
  return (
    <Link to={`/artwork/${artwork.id}`} className="artwork-card">
      <div className="artwork-card__image-wrap">
        <img src={artwork.image} alt={artwork.title} loading="lazy" />
      </div>
      <div className="artwork-card__info">
        <h3>{artwork.title}</h3>
        <p className="artwork-card__artist">{artist?.name}</p>
        <p className="artwork-card__meta">
          {artwork.medium}{artwork.year ? `, ${artwork.year}` : ''}
        </p>
        {artwork.price != null && (
          <p className="artwork-card__price">
            ${artwork.price.toLocaleString()}
          </p>
        )}
      </div>
    </Link>
  );
}
