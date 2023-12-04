import React from 'react';
import YouTube from 'react-youtube';
import '../../../css/Boss-link.css';

function Boss5() {
  const videoId = 'omCbuCmXXaU';
  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className='ContainerLinkBoss5'>
      <h2 className='nameBoss'>아브렐슈드</h2>
      <div className='MusicBossLink5'>
        <YouTube videoId={videoId} opts={opts} />
      </div>
    </div>
  );
}

export default Boss5;
