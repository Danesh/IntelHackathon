var path = require('path')

module.exports = {
  httpPort: 8080,
  streamPort: 8090,
  wsPort: 8084,
  staticFolder: path.join(__dirname + '/../../../client')
};
