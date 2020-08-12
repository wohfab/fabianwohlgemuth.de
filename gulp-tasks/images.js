const {dest, src} = require('gulp');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

// Grabs all images, runs them through imagemin
// and plops them in the dist folder
const images = () => {
  // We have specific configs for jpeg and png files to try
  // to really pull down asset sizes
  return src('./src/images/**/*')
    .pipe(
      imagemin(
        [
          imagemin.mozjpeg({quality: 30, progressive: true}),
          imagemin.optipng({optimizationLevel: 7, interlaced: null})
        ],
        {
          silent: true
        }
      )
    )
    .pipe(webp())
    .pipe(dest('./dist/images'));
};

module.exports = images;