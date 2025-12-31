const { getStreams } = require('./providers/moviesdrive.js');

getStreams('200875', 'tv',1,1).then(streams => {
  console.log('Found', streams.length, 'streams');
  streams.forEach(stream => console.log(`${stream.name}: ${stream.quality} : ${stream.url}`));
}).catch(console.error);