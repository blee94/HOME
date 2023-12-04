import React from 'react';
import YouTube from 'react-youtube';
import '../../../css/Boss-link.css';

function Boss2() {
  const videoId = 'e1iidpnGM3g';
  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className='ContainerLinkBoss2'>
      <h2 className='nameBoss'>발탄</h2>
      <div className='MusicBossLink2'>
        <YouTube videoId={videoId} opts={opts} />
      </div>
    </div>
  );
}

export default Boss2;
