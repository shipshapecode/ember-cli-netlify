ember-cli-netlify
==============================================================================

<a href="https://shipshape.io/"><img src="http://i.imgur.com/DWHQjA5.png" alt="Ship Shape" width="100" height="100"/></a>

**[ember-cli-netlify is built and maintained by Ship Shape. Contact us for Ember.js consulting, development, and training for your project](https://shipshape.io/ember-consulting/)**.

[![npm version](https://badge.fury.io/js/ember-cli-netlify.svg)](http://badge.fury.io/js/ember-cli-netlify)
![Download count all time](https://img.shields.io/npm/dt/ember-cli-netlify.svg)
[![npm](https://img.shields.io/npm/dm/ember-cli-netlify.svg)]()
[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-netlify.svg)](http://emberobserver.com/addons/ember-cli-netlify)
[![Build Status](https://travis-ci.org/shipshapecode/ember-cli-netlify.svg)](https://travis-ci.org/shipshapecode/ember-cli-netlify)

This addon allows you to configure your Netlify headers and redirects.


Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-cli-netlify
```

Usage
------------------------------------------------------------------------------

### .netlifyheaders and/or .netlifyredirects

There are a few ways to use this addon. The first one is to define a `.netlifyheaders` 
and/or a `.netlifyredirects` file in the root of your project and this
addon will copy the output to `dist/_headers` and `dist/_redirects` respectively.

### ember-cli-build.js

The second way is to define an `ember-cli-netlify` hash in your `ember-cli-build.js`.
You can combine these methods, and anything defined in the config hash will be
appended to the existing files. Currently, only redirects are supported, not headers.

```js
'ember-cli-netlify': {
  redirects: [
    'https://blog.shipshape.io/* https://shipshape.io/blog/:splat 301!',
    'https://blog.shipshape.io/* https://shipshape.io/blog/:splat 301!'
  ]
}
```

### Using in an addon

The final option, for addon authors, is to declare redirects for ember-cli-netlify during compilation. 
To do so, you will want to:

* Add `"ember-cli-netlify-plugin"` to your addon's package.json keywords array.
* Define a `netlifyRedirects()` function in your addon's main file, that returns an array of redirects.
* Advise your addon's users to install & configure `ember-cli-netlify` in the host application.


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
