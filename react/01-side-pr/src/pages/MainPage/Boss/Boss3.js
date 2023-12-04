import React from 'react';
import YouTube from 'react-youtube';
import '../../../css/Boss-link.css';

function Boss3() {
  const videoId = 'LjeLcSCdRbQ';
  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className='ContainerLinkBoss3'>
      <h2 className='nameBoss'>비아키스</h2>
      <div className='MusicBossLink3'>
        <YouTube videoId={videoId} opts={opts} />
      </div>
    </div>
  );
}

export default Boss3;
