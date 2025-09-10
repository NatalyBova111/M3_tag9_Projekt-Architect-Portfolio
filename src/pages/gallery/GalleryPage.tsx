import React from "react";
import GalleryGrid from "../../components/gallery/galleryGrid/GalleryGrid";

const GalleryPage: React.FC = () => {
  return (
    <div className="container">
      <GalleryGrid />
      <hr className="sep" />
    </div>
  );
};

export default GalleryPage;
