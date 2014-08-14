![image_squidhome@2x.png](http://i.imgur.com/RIvu9.png)
# sails-generate-gulpfile
-----------------------------------------------
[![NPM version][npm-version-image]][npm-url] [![NPM downloads][npm-downloads-image]][npm-url] [![Dependency Status][dependency-image]][dependency-url] [![MIT License][license-image]][license-url]

A `gulpfile` generator for use with the Sails command-line interface that works with gulp and sails lift.


### Installation

Certain generators are installed by default in Sails, but they can be overridden.  Check the [Sails docs](http://sailsjs.org/#!documentation) for information on installing generator overrides / custom generators.

```sh
$ npm install -g sails-generate-backend-gulp
$ npm install -g sails-generate-gulpfile
$ npm install -g sails-generate-frontend-gulp
$ npm install -g sails-generate-new-gulp

```

## .sailsrc

.sailsrc needs to be added to the working dir with the following:

```sh
{
    "generators": {
        "modules": {
            "new": "sails-generate-new-gulp",
            "frontend": "sails-generate-frontend-gulp",
            "backend": "sails-generate-backend-gulp",
            "gulpfile": "sails-generate-gulpfile"
        }
    }
}
```

### Production Usage

##### On the command line

```sh
$ sails generate gulpfile
```

##### In a node script

```javascript
var path = require('path');
var sailsgen = require('sails-generate');
var scope = {
	rootPath: path.resolve(__dirname)
};
sailsgen(require('sails-generate-gulpfile'), scope, function (err) {
	if (err) throw err;

	// It worked.
});
```

### Configuration

The gulpfile.js is configured for only autoloading a few gulp module types (types as in name variations like gulp, run and main)

```sh
plugins = require('gulp-load-plugins')({
						pattern: ['gulp-*', 'merge-*', 'run-*', 'main-*'], // the glob to search for
						replaceString: /.*-/, // what to remove from the name of the module when adding it to the context
						lazy: true, // whether the plugins should be lazy loaded on demand
					}),
```

If you would like to add more gulp modules for creating tasks, install the module and add the begining name of the module to the plugins variable above like ``` jump-* ```. This will then lazy autoload all modules that have the prefix jump- in the name.

The plugin can then be called in task with ``` plugins.<suffix of module name>```, so gulp-bower becomes plugins.bower and main-gulp-files becomes plugins.files. 

See [gulp-load-plugins](https://github.com/jackfranklin/gulp-load-plugins) for more options on naming autoloaded plugins

### Gulp-Notify

Because this system uses gulp notify, there is a toggle to turn it on or off (default is off). If you would like to use this feature you must install an app that works with gulp-notify.

Mac OS X: No external installation needed (if Mac OS X 10.8 or higher).
Linux: Notify-send should be installed (On Ubuntu this is installed per default)
Windows: [Growl for Windows](http://www.growlforwindows.com/gfw/default.aspx) should be installed.

just change

```sh
growl = false;
```

to

```sh
growl = true;
```

### Development

To get started quickly and see this generator in action, run the `bin/index.js` script:

```sh
$ git clone YOUR_FORK_OF_THIS_REPO sails-generate-gulpfile-fork
$ cd sails-generate-gruntfile-fork
$ npm install
$ node ./bin
```

`bin/index.js` is a simple script, bundled only for convenience, that runs the generator with hard-coded scope variables.  Please feel free to modify that file however you like!  Also see `CONTRIBUTING.md` for more information on overriding/enhancing generators.



### Questions?

See `FAQ.md`.



### More Resources

- [Stackoverflow](http://stackoverflow.com/questions/tagged/sails.js)
- [#sailsjs on Freenode](http://webchat.freenode.net/) (IRC channel)
- [Twitter](https://twitter.com/sailsjs)
- [Professional/enterprise](https://github.com/balderdashy/sails-docs/blob/master/FAQ.md#are-there-professional-support-options)
- [Tutorials](https://github.com/balderdashy/sails-docs/blob/master/FAQ.md#where-do-i-get-help)
- <a href="http://sailsjs.org" target="_blank" title="Node.js framework for building realtime APIs."><img src="https://github-camo.global.ssl.fastly.net/9e49073459ed4e0e2687b80eaf515d87b0da4a6b/687474703a2f2f62616c64657264617368792e6769746875622e696f2f7361696c732f696d616765732f6c6f676f2e706e67" width=60 alt="Sails.js logo (small)"/></a>


### License

**[MIT](./LICENSE)**
&copy; 2014 [Karnith](http://github.com/Karnith)

[Sails](http://sailsjs.org) is free and open-source under the [MIT License](http://sails.mit-license.org/).

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE

[npm-url]: https://npmjs.org/package/sails-generate-gulpfile
[npm-version-image]: http://img.shields.io/npm/v/sails-generate-gulpfile.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/sails-generate-gulpfile.svg?style=flat

[dependency-image]: https://gemnasium.com/Karnith/sails-generate-gulpfile.svg?style=flat
[dependency-url]: https://gemnasium.com/Karnith/sails-generate-gulpfile

[coverage-image]: http://img.shields.io/coveralls/Karnith/sails-generate-gulpfile/master.svg?style=flat
[coverage-url]: https://coveralls.io/r/Karnith/sails-generate-gulpfile?branch=master
