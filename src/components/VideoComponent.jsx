import React from 'react';
import './VideoComponent.scss'; // 注意修改這裡的引入路徑，確保正確指向你的 CSS 檔案

const VideoComponent = () => {
  return (
    <div className="video-container">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/F4neLJQC1_E?si=_dQWbQNI5J-bNIZL"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};  

export default VideoComponent;
