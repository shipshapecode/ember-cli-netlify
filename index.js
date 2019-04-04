'use strict';

const fs = require('fs-extra');

module.exports = {
  name: require('./package').name,
  outputReady() {
    const netlifyOptions = this.app.options['ember-cli-netlify'];

    if (fs.pathExistsSync('.netlifyheaders')) {
      fs.copySync('.netlifyheaders', 'dist/_headers', { clobber: true });
    }

    if (fs.pathExistsSync('.netlifyredirects')) {
      fs.copySync('.netlifyredirects', 'dist/_redirects', { clobber: true });
    } else if (netlifyOptions && netlifyOptions.redirects) {
      fs.writeFileSync('dist/_redirects');
    }

    if (netlifyOptions && netlifyOptions.redirects) {
      const stream = fs.createWriteStream('dist/_redirects', { flags: 'a' });
      netlifyOptions.redirects.forEach((redirect) => {
        stream.write(`${redirect}\n`);
      });
      stream.end();
    }
  }
};
