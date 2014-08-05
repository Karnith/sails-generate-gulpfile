 module.exports = function(gulp, plugins) {
	gulp.task('clean', function() {
		return gulp.src(['.tmp/public/styles', '.tmp/public/js', '.tmp/public/images'], {read: false})
				.pipe(plugins.rimraf())
				.pipe(plugins.notify({ message: 'Clean task complete' }));;
	});
};
