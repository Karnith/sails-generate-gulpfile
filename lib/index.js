/**
 * sails-generate-gulpfile
 *
 * Usage:
 * `sails generate gulpfile`
 *
 * @type {Object}
 */
module.exports = {

	templatesDirectory: require('path').resolve(__dirname,'../templates'),

	before: require('./before'),

	targets: {

		'./gulpfile.js': { template: './gulpfile.js' },

		// Tasks folder, subfolders, and README.
		'./tasks': { folder: {} },
		'./tasks/config': { folder: {} },
		'./tasks/register': { folder: {} },
		'./tasks/README.md': { template: './tasks/README.md' }
	}
};

