// todo - add css and templates sections to layout.ejs
module.exports = function(gulp, plugins) {
	gulp.task('linker',['scripts'], function() {
		// Read templates
		return gulp.src('views/layout.ejs')
				// Link the JavaScript
				.pipe(plugins.linker({
					scripts: ['.tmp/public/js/**.js'],
					startTag: '<!--SCRIPTS-->',
					endTag: '<!--SCRIPTS END-->',
					fileTmpl: '<script src="%s"></script>',
					appRoot: '.tmp/public',
					relative: true
				}))
				// Write modified files to www/
				.pipe(gulp.dest('views/'))
				.pipe(plugins.notify({ message: 'Linker task complete' }));
	  });
  };
