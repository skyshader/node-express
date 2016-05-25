const server = require('./index.es6');
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log('Server running on port %d', port);
});
