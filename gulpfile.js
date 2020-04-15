var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var reload = browserSync.reload;

// Sass コンパイル
var sass = require("gulp-sass");
var sassGlob = require("gulp-sass-glob");
var autoprefixer = require("gulp-autoprefixer");
var cmq = require("gulp-combine-media-queries");

gulp.task("sass", function() {
  return gulp
    .src("sass/**/*.scss")
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cmq())
    .pipe(gulp.dest("./css"));
});

// JS 圧縮
var uglify = require("gulp-uglify");

gulp.task("minjs", function() {
  return gulp
    .src("js/**/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./js"));
});

// 画像圧縮
var imagemin = require("gulp-imagemin");
var pngquant = require("imagemin-pngquant");
var mozjpeg = require("imagemin-mozjpeg");
var imageminSvgo = require("imagemin-svgo");
var changed = require("gulp-changed");

gulp.task("minimage", () => {
  return gulp
    .src("img" + "/**/*.{png,jpg,gif,svg}")
    .pipe(
      imagemin([
        pngquant(["65-80", 1, 0]),
        mozjpeg({
          quality: 80,
          progressive: true
        }),
        imagemin.svgo(),
        imagemin.optipng(),
        imagemin.gifsicle()
      ])
    )
    .pipe(gulp.dest("./img"));
});

// CSS 圧縮
var cleanCSS = require("gulp-clean-css");
gulp.task("mincss", function() {
  return gulp
    .src("css/**/*.css")
    .pipe(cleanCSS())
    .pipe(gulp.dest("./css"));
});

gulp.task("mins", gulp.parallel("mincss", "minimage", "minjs"));

gulp.task("default", function(done) {
  gulp.watch("sass/**/*.scss", gulp.task("sass"));
  done();
  console.log("Default all task done!");
});