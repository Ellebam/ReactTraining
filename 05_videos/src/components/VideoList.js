import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  //the curly braces inside the props argument will help us not to
  //call props.videos all the time!

  const renderedList = videos.map((video) => {
    return <VideoItem video={video} onVideoSelect={onVideoSelect} />;
  });
  return <div className='ui relaxed divided list'>{renderedList}</div>;
};

export default VideoList;
