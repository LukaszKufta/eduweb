module.exports = grunt => {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({

      pkg: grunt.file.readJSON("package.json"),

        clean: {
            dev: {
                src: ["src/css/*"]
            },
            prod: {
                src: ["build/*, build/**/*"]
            }
        },
        jshint: {
            dev: {
                src: ["src/js/**/*.js", "!src/js/scripts/*.js"]
            }
        },
        sass: {
            dev: {
                options: {
                    style: "expanded"
                },
                src: "src/sass/style.scss",
                dest: "src/css/style.css"
            }
        },
        autoprefixer: {
            dev: {
                options: {
                    browsers: ["last 50 version"]
                },
                src: "src/css/*.css"
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            prod: {
                src: "src/js/**/*.js",
                dest: "build/js/scripts.js"
            }
        },
        uglify: {
            options: {
                mangle: false,
                banner: "/* <%= pkg.name %> - <%= pkg.version %> - <%= grunt.template.today('yyyy') %> */\n"
            },
            prod: {
                src: "build/js/scripts.js",
                dest: "build/js/scripts.min.js"
            }
        },
        cssmin: {
            prod: {
                src: "src/css/style.css",
                dest: "build/css/style.min.css"
            }
        },
        htmlmin: {
            options: {
                collapseWhitespace: true,
                removeComments: true
            },
            prod: {
                src: "src/index.html",
                dest: "build/index.html"
            }
        },
        imagemin: {
            options: {
                optimizationLevel: 3
            },
            prod: {
                files: [{
                    expand: true,
                    cwd: "src/images/",
                    src: "*",
                    dest: "build/images/"
                }]
            }
        },
        watch: {
            options: {
                livereload: true
            },
            dev: {
                files: ["src/**/*"],
                tasks: ["dev"]
            }
        },
        copy: {
            src: "src/index.html",
            dest: "build/index.html"
        }

    });

    grunt.registerTask("copy", "Kopiuje pliki", () => {
        var src = grunt.config.get("copy.src"),
            dest = grunt.config.get("copy.dest");

        grunt.file.copy(src, dest);

        grunt.log.ok("Plik skopiowany");
    })
    grunt.registerTask("dev", ["clean", "jshint", "sass", "autoprefixer", "watch"]);
    grunt.registerTask("default", "dev");
    grunt.registerTask("build", ["clean", "jshint", "sass", "autoprefixer", "concat", "uglify", "cssmin", "htmlmin", "imagemin"]);
};