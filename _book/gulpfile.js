var gulp = require("gulp");
var shell = require('gulp-shell')


gulp.task('build',shell.task([
  'npm run build'
   
]));



gulp.task('deploy',shell.task([
   'npm run deploy'
   
]));

gulp.task('serve',shell.task([
   'gitbook serve'

]));
   


gulp.task('default', [ 'deploy','build' ]);