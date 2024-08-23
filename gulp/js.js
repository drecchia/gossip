const { src, dest, series } = require('gulp');

const concat = require('gulp-concat');
const minify = require('gulp-minify');
const babel = require('gulp-babel');

/** Run all scripts. */
exports.all = (cb) => {
    return series(AllInOne)(cb);
};

const dist = {
    'files': [
        'src/js/**/*.js',  // This will include all JS files in src/js and its subdirectories
    ],
    'outputFolder': 'dist/js',
};

// Transpile the speicfied TS files (defaults to all TS files) to JS.
const AllInOne = (cb, input, output) => {
    return src(dist.files)
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('gossip.js'))
        .pipe(minify({
            ext: {
                src: '-debug.js',
                min: '-min.js'
            },
            noSource: false
        }))
        .on('error', function(err) {
            console.error('Error in minify:', err.toString());
            this.emit('end');
        })
        .pipe(dest(dist.outputFolder))
        .on('error', function(err) {
            console.error('Error in dest:', err.toString());
            this.emit('end');
        });
};