'use strict';

const fs = require('fs-extra');

module.exports = {
  name: require('./package').name,
  outputReady() {
    if (fs.pathExistsSync('.netlifyheaders')) {
      fs.copySync('.netlifyheaders', 'dist/_headers', { clobber: true });
    }

    if (fs.pathExistsSync('.netlifyredirects')) {
      fs.copySync('.netlifyredirects', 'dist/_redirects', { clobber: true });
    }
  }
};
