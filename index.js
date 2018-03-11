'use strict';

const fs = require('fs-extra');

module.exports = {
  name: 'ember-cli-netlify',
  outputReady(result) {
    if (fs.pathExistsSync('.netlifyheaders')) {
      fs.copySync('.netlifyheaders', 'dist/_headers', { clobber: true });
    }

    if (fs.pathExistsSync('.netlifyredirects')) {
      fs.copySync('.netlifyredirects', 'dist/_redirects', { clobber: true });
    }
  }
};
