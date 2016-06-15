var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var browserSync = require('browser-sync').create();
var cssbeautify = require('gulp-cssbeautify');

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
		.pipe(cssbeautify({
			indent: '	',
			openbrace: 'separate-line',
			autosemicolon: true}))
		.pipe(gulp.dest(config.baseDir + "/css"));
});

gulp.task('watch', function(){
	gulp.watch(config.baseDir + "/css/*.scss", ['css']);
});
