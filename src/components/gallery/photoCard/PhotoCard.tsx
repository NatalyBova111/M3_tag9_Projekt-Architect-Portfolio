import React from "react";

type Props = { src: string; alt: string };

const PhotoCard: React.FC<Props> = ({ src, alt }) => {
  return (
    <div className="photo-card card">
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
};

export default PhotoCard;
