import React from 'react';
import { VideoPlayer, VideoDescription } from './Video.styles';

const Video = (videoData) => {
  const video = {
    url: videoData.url,
    explanation: videoData.explanation,
  };
  return (
    <div>
      <VideoPlayer src={video.url} alt="NASA" />
      <VideoDescription>{video.explanation}</VideoDescription>
    </div>
  );
};

export default Video;
