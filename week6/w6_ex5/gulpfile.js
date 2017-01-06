/*---------- Declare gulp variables ----------*/

    var gulp        = require('gulp'),
        jshint      = require('gulp-jshint'),
        csslint     = require('gulp-csslint'),
        compass     = require('gulp-compass'),
        connect     = require('gulp-connect'), path = require('path'),
        livereload  = require('gulp-livereload'),
        clean       = require('gulp-clean'),
        usemin      = require('gulp-usemin'),
        rev         = require('gulp-rev'),
        uglify      = require('gulp-uglify'),
        minifyCss   = require('gulp-minify-css'),
        imagemin    = require('gulp-imagemin'),
        watch       = require('gulp-watch')


/*---------- Declare paths ----------*/

    var paths = {
        src : {
            sass:           './src/stylesheets/sass/**/*.scss',
            css:            './src/stylesheets/css/*.css',
            scripts:        './src/javascripts/**/*.js',
            images:         './src/images/*',
            html:           './*.html'
        },
        dist : {
            css:            './build/assets/stylesheets',
            scripts:        './build/assets/javascripts',
            images:         './build/assets/images',
            html:           './build'
        }
    };


/*---------- Tasks ----------*/

    // CSS Lint
    gulp.task('csslint', function(){
        return gulp.src(paths.src.css)
            .pipe(csslint())
            .pipe(csslint.reporter());
    });

    // JS Lint
    gulp.task('jshint', function(){
        return gulp.src(paths.src.scripts)
            .pipe(jshint())
            .pipe(jshint.reporter('jshint-stylish'));
    });

    // Usemin : Concat & Minify Scripts un add revision to avoid cache
    gulp.task('usemin', function(){
        return gulp.src(paths.src.html)
            .pipe(usemin({
                css: [minifyCss(), rev()],
                modernizr: [uglify()],
                js: [uglify(), rev()]
            }))
            .pipe(gulp.dest(paths.dist.html));

    });

    // Minify Images
    gulp.task('imagemin', function(){
        return gulp.src(paths.src.images)
            .pipe(imagemin({
                optimizationLevel: 5,
                progressive: true,
                interlaced: true
            }))
            .pipe(gulp.dest(paths.dist.images));
    });

    // Compass
    gulp.task('compass', function(){
        return gulp.src(paths.src.sass)
            .pipe(compass({
                config_file: './config.rb',
                css: './src/stylesheets/css',
                sass: './src/stylesheets/sass'
            }))
            .pipe(gulp.dest(paths.src.css));
    });

    // Clean Build Folder
    gulp.task('clean', function() {
        return gulp.src([paths.dist.html], {read: false})
            .pipe(clean());
    });

    // Create Server
    gulp.task('connect', connect.server({
        root: [ path.join(__dirname)],
        port: 1337,
        //livereload: true,
        open: {
            file: 'index.html',
            browser: 'Google Chrome'
        }
    }));

    // Watch Files For Changes & Livereload
    gulp.task('watch', function() {
        var server = livereload();
        gulp.watch(paths.src.sass, ['compass']);
        gulp.watch([paths.src.css, paths.src.scripts, paths.src.images, paths.src.html]).on('change', function(file) {
            server.changed(file.path);
        });
    });


/*---------- Environements Tasks ----------*/

    // Development tasks
    gulp.task('dev', ['connect','watch']);
    // Production tasks
    gulp.task('prod', ['clean','jshint','imagemin','usemin']);

    // Default Task
    gulp.task('default',['dev']);
    // Build Task
gulp.task('build',['prod']);