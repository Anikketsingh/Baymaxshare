import React from 'react';

function GameEmbed() {
  return (
    <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      <iframe
        title="My Game"
        src="../public/Backend/index.html"// Adjust path to your game
        style={{ width: '100%', height: '100%', border: 'none' }}
      ></iframe>
    </div>
  );
}

export default GameEmbed;
