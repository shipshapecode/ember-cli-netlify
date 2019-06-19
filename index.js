'use strict';

const fs = require('fs-extra');

module.exports = {
  name: require('./package').name,
  outputReady() {
    const netlifyOptions = this.app.options['ember-cli-netlify'];
    const pluginRedirectFunctions = loadNetlifyRedirects(this);

    let redirectsFromPlugins = pluginRedirectFunctions.reduce((redirects, pluginRedirectFunction) => {
      return redirects.concat(pluginRedirectFunction());
    }, []);

    if (fs.pathExistsSync('.netlifyheaders')) {
      fs.copySync('.netlifyheaders', 'dist/_headers', { clobber: true });
    }

    if (fs.pathExistsSync('.netlifyredirects')) {
      fs.copySync('.netlifyredirects', 'dist/_redirects', { clobber: true });
    }

    if (netlifyOptions && netlifyOptions.redirects) {
      netlifyOptions.redirects.forEach((redirect) => {
        writeToFile('dist/_redirects', redirect);
      });
    }

    if (redirectsFromPlugins && redirectsFromPlugins.length) {
      redirectsFromPlugins.forEach((redirect) => {
        writeToFile('dist/_redirects', redirect);
      });
    }
  }
};

function loadNetlifyRedirects(context) {
  const addons = context.project.addons || [];

  return addons
    .filter((addon) => addon.pkg.keywords.includes('ember-cli-netlify-plugin'))
    .filter((addon) => typeof addon.netlifyRedirects === 'function')
    .map((addon) => addon.netlifyRedirects.bind(addon));
}

/**
 * Write lines of text to a file
 * @param {string} file The file path
 * @param {string} text The text to write
 */
function writeToFile(file, text) {
  fs.outputFileSync(file, `${text}\n`, { flag: 'a' });
}
