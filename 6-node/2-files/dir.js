const fs = require('fs');

// useful to check if a file exists before deleting, renaming or creating a file
if (!fs.existsSync('./new')) {
  fs.mkdir('./new', (err) => {
    if (err) throw err;
    console.log('Directory created.')
  });
}

if (fs.existsSync('./new')) {
  fs.rmdir('./new', (err) => {
    if (err) throw err;
    console.log('Directory removed.')
  });
}

// --- To get results like tut: ---
//  Not exactly sure why the above doesn't work this way.
//  Looks exactly like what instructor has.
/* const fs = require('fs');

console.log('before', fs.existsSync('./new'));

// useful to check if a file exists before deleting, renaming or creating a file
if (!fs.existsSync('./new')) {
  fs.mkdirSync('./new', (err) => {
    if (err) throw err;
    console.log('Directory created.')
  });
}

console.log('after', fs.existsSync('./new'))

if (fs.existsSync('./new')) {
  fs.rmdirSync('./new');
}

console.log('after after', fs.existsSync('./new')) */