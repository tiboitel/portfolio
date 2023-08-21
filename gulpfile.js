const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const ts = require('gulp-typescript');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');

// Compile SCSS to CSS
gulp.task('sass', () => {
    return gulp.src('src/scss/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'));
});

// Bundle and transpile TypeScript
const tsProject = ts.createProject('tsconfig.json');

gulp.task('typescript', () => {
    return tsProject.src()
    .pipe(ts(tsProject))
    .js.pipe(concat('scripts.js'))
    .pipe(gulp.dest('dist/js'));
});

// Optimize images
gulp.task('imagemin', () => {
    return gulp.src('images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

// Watch for changes
gulp.task('watch', () => {
    gulp.watch('scss/**/*.scss', gulp.series('sass'));
    gulp.watch('ts/**/*.ts', gulp.series('typescript'));
    gulp.watch('images/*', gulp.series('imagemin'));
});

// Default task
gulp.task('default', gulp.parallel('sass', 'typescript', 'imagemin', 'watch'));
