'use strict';
const residue = require('residue');

const residueParams = {
    app: 'residue-web-ui',
    url: 'localhost:8777',
};

//residue.connect(residueParams);

const app = require('./app');

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
