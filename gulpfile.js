const gulp = require('gulp');
const { parallel,series } = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const rename = require('gulp-rename');



// Static server & watch scss + html files
function watch() {

    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('./scss/**/*.scss', series(minCSS,style));
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js', series(minJS,browserSync.reload));

};

// Compile Sass into CSS & inject into browsers
function style() {
    return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());  
};

// Minify CSS
function minCSS(){
    return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(autoprefixer({
        overridebrowserslist: ['last 2 versions'],
        cascade: false
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./css'));
}

// Minify JS 
function minJS(){
    return gulp.src(['./js/navigation.js','./js/form.js','./js/animation.js'])
    .pipe(concat('all.js'))
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./js'));
}

// Minify Images
function minIMG(){
    return gulp.src(['./img/logo/*','!./img/logo/*.min.*'])
    .pipe(imagemin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./img/logo'));
}

// function minify(){
//     return gulp.parallel([minCSS,minJS,minIMG])();
// }

// exports
exports.style = style;
exports.minCSS = minCSS;
exports.minJS = minJS;
exports.minIMG = minIMG;
exports.watch = watch;
exports.minify = parallel(minCSS,minJS,minIMG);
exports.default = watch;


