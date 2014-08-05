module.exports = function(gulp, plugins) {
	gulp.task('watch', function() {
		// Watch .less files
		gulp.watch('assets/styles/**/*.less', ['styles']);
		// Watch .js files
		gulp.watch('assets/js/**/*.js', ['scripts']);
		// Watch image files
		gulp.watch('assets/images/**/*', ['images']);
		// Create LiveReload server
		var server = plugins.livereload();
		// Watch any files in dist/, reload on change
		gulp.watch(['assets/**/**']).on('change', function(file) {
			server.changed(file.path);
		});

	});
};
