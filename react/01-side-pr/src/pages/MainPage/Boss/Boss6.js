import React from 'react';
import YouTube from 'react-youtube';
import '../../../css/Boss-link.css';

function Boss6() {
  const videoId = '-L_TVqKCl2g';
  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className='ContainerLinkBoss'>
      <h2 className='nameBoss'>라우리엘</h2>
      <div className='MusicBossLink6'>
        <YouTube videoId={videoId} opts={opts} />
      </div>
    </div>
  );
}

export default Boss6;
