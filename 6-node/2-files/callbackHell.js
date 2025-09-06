const fs = require('fs');
const path = require('path');

// It really is asynchronous! :/
fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

console.log('Hello...');

fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you.', (err) => {
  if (err) throw err;
  console.log('Write complete.');

  // if you want to append to the file you have just written to,
  //  it's a good idea to place the append function inside the callback (here).
  //  (I guess because you never know wth asynchronicity (what's the point then?))
  fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nYes it is.', (err) => {
    if (err) throw err;
    console.log('Append complete.');

    // Now this is starting to look like "callback hell".
    fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err) => {
      if (err) throw err;
      console.log('Rename complete.')
    });
  });
});

// fs.appendFile(path.join(__dirname, 'files', 'test.txt'), 'Testing text.', (err) => {
//   if (err) throw err;
//   console.log('Append complete.');
// });


// exit on uncaught errors
process.on('uncaughtException', err => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});