import React from 'react';
import { Photo, Description } from './Image.styles';

const Image = (photoData) => {
  const photo = {
    url: photoData.url,
    explanation: photoData.explanation,
    credit: photoData.copyright,
  };
  return (
    <div>
      <Photo src={photo.url} alt="NASA" />
      <Description aria-label="Photo explanation">
        <p>{photo.explanation}</p>
      </Description>
    </div>
  );
};
export default Image;
