import React from 'react';
import YouTube from 'react-youtube';
import '../../../css/Boss-link.css';

function Boss4() {
  const videoId = 'PCt3w7uTdHQ';
  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className='ContainerLinkBoss4'>
      <h2 className='nameBoss'>쿠크세이튼</h2>
      <div className='MusicBossLink4'>
        <YouTube videoId={videoId} opts={opts} />
      </div>
    </div>
  );
}

export default Boss4;
