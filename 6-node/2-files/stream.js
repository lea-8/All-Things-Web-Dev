const fs = require('fs');

const rs = fs.createReadStream('./files/lorem.txt', {encoding: 'utf8'});

const ws = fs.createWriteStream('./files/new-lorem.txt');

// TODO: quite confused on this
//  methods passed into on() 
//  which is called on rs...???
/* rs.on('data', (dataChunk) => {
  ws.write(dataChunk);
}) */

rs.pipe(ws);