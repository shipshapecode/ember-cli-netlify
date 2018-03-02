'use strict';

const fs = require('fs-extra');

module.exports = {
  name: 'ember-cli-netlify',
  outputReady(result) {
    fs.copySync('.netlifyheaders', 'dist/_headers', { clobber: true });
    fs.copySync('.netlifyredirects', 'dist/_redirects', { clobber: true });
  }
};
