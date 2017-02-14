var gulp = require("gulp");
var shell = require('gulp-shell')
var ghPages = require('gulp-gh-pages');
 


gulp.task('gh-pages', function() {
   return gulp.src('./gh-pages/**/*')
   .pipe(ghPages());
});