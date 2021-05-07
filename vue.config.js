const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    configureWebpack: {
        devtool: 'inline-source-map',
        resolve: {
          alias: {
            '@': resolve('src')
          }
        }
      },
}