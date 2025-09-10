import React from "react";
import { photos, type Photo } from "../../../data/photos";
import "../Gallery.css";

const GalleryGrid: React.FC = () => {
  // 9 фото + 1 серая = 10 ячеек (2 × 5)
  const visible: Photo[] = photos.slice(0, 9);

  return (
    <section className="container gallery">
       <h1 className="page-title">
  <span className="page-kicker">Photo</span>
  <span className="page-main">Gallery</span>
</h1> 

      <div className="gallery-grid grid-5x2">
        {/* первая — серая заглушка */}
        <div className="gallery-ph" aria-hidden="true" />
        {/* остальные 9 фото */}
        {visible.map((p) => (
          <figure key={p.id} className="gallery-item">
            <img src={p.src} alt={p.alt} />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default GalleryGrid;
