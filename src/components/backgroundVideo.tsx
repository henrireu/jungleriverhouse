import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import homeVideo from '../assets/videos/background.mp4';
import roomsVideo from '../assets/videos/rooms-background.mp4';

import homePoster from '../assets/images/posters/homePoster.png';
import roomsPoster from '../assets/images/posters/roomsPoster.png';

import '../styles/video.css';

const Video = () => {
  const [bgVideo, setBgVideo] = useState<string>('');
  const [poster, setPoster] = useState<string>('');

  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    if (currentPath === '/') {
      setBgVideo(homeVideo)
      setPoster(homePoster)
    }
    if (currentPath === '/rooms') {
      setBgVideo(roomsVideo)
      setPoster(roomsPoster)
    }
  },[currentPath])
  

  return (
    <div dangerouslySetInnerHTML={{ __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          poster="${poster}"
          src="${bgVideo}"
          class="video-bg"
        />,
    ` }}></div>
  )
}



export default Video;