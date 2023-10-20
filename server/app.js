const React = require('react');
const ReactDOMServer = require('react-dom/server');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const net = require('net');
const Home = require('../src/components/Home');
const ManageClients = require('../src/components/ManageClients');

const logger = require('residue').getLogger('muflihun');

const app = express();

function handleRender(req, res) {
  //const html = ReactDOMServer.renderToString(<Home />);

  const clients = {
    clients: [{
      'id': 'client 1',
      'key_size': 256,
    }]
  }
  console.log(clients);
  const html = ReactDOMServer.renderToString(<ManageClients {...clients}/>);

  console.log(html);

  // Load contents of index.html
  fs.readFile('./index.html', 'utf8', function (err, data) {
    if (err) throw err;

    // Inserts the rendered React HTML into our main div
    const document = data.replace(/<div id="root"><\/div>/, `<div id="root">${html}</div>`);

    // Sends the response back to the client
    res.send(document);
  });
}

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('/api/server', function (req, res) {
  const admin_socket = new net.Socket();
  admin_socket.connect(8776, '127.0.0.1');

});

app.get('/api/username', function (req, res) {
  console.log(req.url);
  res.set('Content-Type', 'application/json');
  res.send('{"username" : "admin"}');
});

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  console.log('page not from react-router loaded: ' + req.url);
  //res.sendFile(path.resolve(__dirname, '..', 'index.html'));
  handleRender(req, res);
});

module.exports = app;
