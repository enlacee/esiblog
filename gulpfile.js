var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');

var config = {
	baseDir: "./assets",
	bowerDir: "./bower_components"
};

gulp.task('css', function(){
	return gulp.src(config.baseDir + "/css/app.scss")
		.pipe(sass({
			includePaths: [config.bowerDir + '/css'],
		}))
		// .pipe(cssmin())
		.pipe(gulp.dest(config.baseDir + "/css"));
});


gulp.task('default', ['css']);
// Rerun the task when a file changes
gulp.task('watch', function(){
	gulp.watch(config.baseDir + "/css/*.scss", ['css']);
});
