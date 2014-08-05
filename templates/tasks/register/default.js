module.exports = function(gulp) {
	// Default task
	gulp.task('default', ['styles', 'copy', 'scripts', 'images', 'linker', 'watch']);
};
