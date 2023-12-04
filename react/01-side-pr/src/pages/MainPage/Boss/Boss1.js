import React from 'react';
import YouTube from 'react-youtube';
import '../../../css/Boss-link.css';

function Boss1() {
  const videoId = 'EUfNXsL1dGM';
  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className='ContainerLinkBoss'>
      <h2 className='nameBoss'>아르고스</h2>
      <div className='MusicBossLink1'>
        <YouTube videoId={videoId} opts={opts} />
      </div>
    </div>
  );
}

export default Boss1;
