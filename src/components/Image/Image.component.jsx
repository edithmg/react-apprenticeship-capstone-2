import React from 'react';
import { Photo, Description } from './Image.styles';

const Image = (photoData) => {
  const photo = {
    url: photoData.url,
    explanation: photoData.explanation,
  };
  return (
    <div>
      <Photo src={photo.url} alt="NASA" />
      <Description aria-label="Photo explanation">
        {photo.explanation}
      </Description>
    </div>
  );
};
export default Image;
