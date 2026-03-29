import { Link } from 'react-router-dom';

export default function ArtworkCard({ artwork, artist }) {
  return (
    <div className="artwork-card">
      <Link to={`/artwork/${artwork.id}`} className="artwork-card__link">
        <div className="artwork-card__image-wrap">
          <img src={artwork.image} alt={artwork.title} loading="lazy" />
        </div>
        <h3 className="artwork-card__title">{artwork.title}</h3>
      </Link>
      {artist && (
        <Link
          to={`/artists/${artist.id}/profile`}
          className="artwork-card__artist"
          onClick={(e) => e.stopPropagation()}
        >
          {artist.name}
        </Link>
      )}
      <p className="artwork-card__meta">
        {artwork.medium}{artwork.year ? `, ${artwork.year}` : ''}
      </p>
      {artwork.price != null && (
        <p className="artwork-card__price">
          ${artwork.price.toLocaleString()}
        </p>
      )}
    </div>
  );
}
