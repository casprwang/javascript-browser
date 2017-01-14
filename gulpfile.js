const gulp = require('gulp');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const notify = require('gulp-notify');


gulp.task('bs', () => {
  browserSync.init({
    server: {
      baseDir: './src',
    },
    notify: {
      styles: {
        top: 'auto',
        bottom: '0',
        left: '0',
        margin: '0px',
        padding: '5px',
        position: 'fixed',
        fontSize: '15px',
        zIndex: '9999',
        borderRadius: '5px 0px 0px',
        color: 'white',
        textAlign: 'center',
        display: 'block',
        backgroundColor: 'rgba(60, 197, 31, 0.498039)',
      },
    },
    // middleware: [historyApiFallback()],
    browser: "google chrome",
  });
});


gulp.task('default', ['bs'], ()=> {
  gulp.watch(['src/**/*.html', 'src/**/*.css', 'src/**/*.js'], reload);
});
