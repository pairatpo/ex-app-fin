module.exports = function (grunt) {
    // Do grunt-related things in here

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        appConfig: {
            libs: 'assets/libs',
            dist: 'dist'
        },

        bower: {
            install: {
                options: {
                    targetDir: '<%= appConfig.libs %>',
                    layout: 'byComponent',
                    install: true,
                    verbose: true,
                    cleanTargetDir: true,
                    cleanBowerDir: false
                }
            }
        },

        clean: {
            dist: {
                options: { force: true },
                files: [
                    { src: ['<%= appConfig.dist %>/**'] }
                ]
            },
            temp: {
                options: { force: true },
                files: [
                    { src: ['.tmp/**'] }
                ]
            }
        },

        copy: {
            dist: {
                files: [
                    { expand: true, src: ['app/**'], dest: '<%= appConfig.dist %>/' },
                    { expand: true, src: ['assets/**'], dest: '<%= appConfig.dist %>/' },
                    { expand: true, src: ['index.html'], dest: '<%= appConfig.dist %>/' },
                ]
            },
            html: {
                files: [
                    { expand: true, src: ['app/**/*.html'], dest: '<%= appConfig.dist %>/' },
                    { expand: true, src: ['index.html'], dest: '<%= appConfig.dist %>/' },
                ],
                //src: 'index.html', dest: '<%= appConfig.dist %>/index.html'
            }
        },

        useminPrepare: {
            html: 'index.html',
            options: {
                dest: '<%= appConfig.dist %>'
            }
        },
        usemin: {
            html: ['<%= appConfig.dist %>/index.html']
        },

        // ng-annotate tries to make the code safe for minification automatically
        // by using the Angular long form for dependency injection.
        ngAnnotate: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/concat',
                    src: '**/*.js',
                    dest: '.tmp/concat'
                }]
            }
        },
    });

    // Default task(s).
    grunt.registerTask('prepare', ['bower:install']);
    grunt.registerTask('build', [
        'prepare',
        'clean:dist',
        'clean:temp',
        'copy:html',
        'useminPrepare',
        'concat',
        'ngAnnotate',
        'uglify',
        'cssmin',
        'usemin'
    ]);
};