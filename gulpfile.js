import gulp from 'gulp';
import gsass from 'gulp-sass'
import lsass from 'sass'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import ts from 'gulp-typescript'
import concat from 'gulp-concat'
import imagemin from 'gulp-imagemin'

const sass = gsass(lsass);

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
    return gulp.src('images/**')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

// Watch for changes
gulp.task('watch', () => {
    gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
    gulp.watch('src/ts/**/*.ts', gulp.series('typescript'));
    gulp.watch('images/*', gulp.series('imagemin'));
});

// Default task
gulp.task('default', gulp.parallel('sass', 'typescript', 'imagemin', 'watch'));

// Build task
gulp.task('build', gulp.parallel('sass', 'typescript', 'imagemin'));
