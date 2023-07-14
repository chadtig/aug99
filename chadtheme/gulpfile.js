var gulp        = require( "gulp" ),
    sass        = require('gulp-sass')(require('sass')),
    prefixer    = require( "gulp-autoprefixer" ),
    pxtorem     = require( "gulp-pxtorem" ),
    sourcemaps  = require("gulp-sourcemaps"),
    path        = require('path'),
    rename      = require('gulp-rename'),
    concat      = require('gulp-concat'),
    cssmin      = require('gulp-cssmin'),
    runSequence = require('run-sequence').use(gulp);
gulp.task('main-sass', function(){
	return gulp.src('public/resources/sass/main.scss')
    	.pipe(sass().on('error', sass.logError))
    	.pipe( prefixer("last 2 versions"))
    	.pipe(sourcemaps.write("/"))
    	.pipe(gulp.dest('css/'));
});;
gulp.task( "watch", function(){
    gulp.watch( "public/resources/sass/**/*.scss",gulp.series(["main-sass"]) );
});