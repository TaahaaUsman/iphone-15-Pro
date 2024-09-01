import React from 'react';
import { hero_video } from '../data'

const VideoComp = () => {
  return (
    <video
      src={hero_video}
      autoPlay
      playsInline
      muted
      className="w-full h-auto"
      style={{ objectFit: 'cover' }}
    />
  );
};

export default VideoComp;
