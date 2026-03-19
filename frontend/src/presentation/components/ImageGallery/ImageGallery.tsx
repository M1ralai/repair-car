import React, { useState } from 'react';
import './ImageGallery.css';

interface ImageGalleryProps {
  images: string[];
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!images || images.length === 0) return null;

  return (
    <>
      <div className="image-gallery-grid">
        {images.map((src, index) => (
          <button
            key={index}
            className="gallery-thumbnail-btn"
            onClick={() => setSelectedImage(src)}
            aria-label={`Görseli büyüt ${index + 1}`}
          >
            <img src={src} alt={`Thumbnail ${index + 1}`} className="gallery-thumbnail" loading="lazy" />
          </button>
        ))}
      </div>

      {selectedImage && (
        <div className="gallery-modal" onClick={() => setSelectedImage(null)} role="dialog" aria-modal="true">
          <div className="gallery-modal-content">
            <button className="gallery-modal-close" onClick={() => setSelectedImage(null)} aria-label="Kapat">
              ×
            </button>
            <img src={selectedImage} alt="Büyütülmüş Görsel" className="gallery-modal-img" />
          </div>
        </div>
      )}
    </>
  );
};
