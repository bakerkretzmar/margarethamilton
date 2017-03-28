const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const rsync = require('gulp-rsync');
const browserSync = require('browser-sync').create();
const del = require('del');

const siteRoot = 'dist';
const sassFiles = '_scss/*.scss';

gulp.task('sass', () => {
  gulp.src(sassFiles)
    .pipe(sass())
    // .pipe(autoprefixer({
    //   browsers: ['> 0.1%']
    // }))
    .pipe(gulp.dest('dist'));
});

gulp.task('copy', () => {
  gulp.src(['_assets/**', '_html/**', '_js/**'])
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', () => {
  return del(['dist/**/*']);
});

gulp.task('serve', () => {
  browserSync.init({
    files: [siteRoot + '/**'],
    port: 4000,
    server: {
      baseDir: siteRoot
    }
  });

  gulp.watch(sassFiles, ['sass']);
  gulp.watch('_html/*.html', ['copy']);
  gulp.watch('_assets/*', ['copy']);
  gulp.watch('_js/*', ['copy']);
});

gulp.task('deploy', () => {
  return gulp.src('dist/**')
    .pipe(rsync({
      root: 'dist/',
      hostname: 'brokenrecord',
      destination: '/home/thebrok4/public_html/greta',
      archive: true
    }));
});

gulp.task('default', ['clean', 'sass', 'copy']);
gulp.task('watch', ['clean', 'sass', 'copy', 'serve']);
