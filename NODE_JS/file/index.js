// file system Api

const fs = require('fs/promises');

// creating directry

try {
    await fs.mkdir('Users\Desktop\NODE_JS\file\index.js');
    console.log('Directory created');

} catch(error) {
    console.log(error);

}
