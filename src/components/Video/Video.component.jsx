import React from 'react';
import { VideoPlayer, VideoDescription } from './Video.styles';

const Video = (videoData) => {
  const video = {
    url: videoData.url,
    explanation: videoData.explanation,
    credit: videoData.copyright,
  };
  return (
    <div>
      <VideoPlayer src={video.url} alt="NASA" aria-label="Video player" />
      <VideoDescription aria-label="Video explanation">
        <p>{video.explanation}</p>
      </VideoDescription>
    </div>
  );
};

export default Video;
