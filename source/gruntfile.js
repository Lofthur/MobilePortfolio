module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

        responsive_images: {
            dev: {
                options: {
                    engine: 'im',
                    sizes: [{
                        width: 115,
                        quality: 25
                    }]
                },

                files: [{
                    expand: true,
                    cwd: 'view/img/',
                    src: ['pizzeria.jpg'],
                    dest: 'viee/img/'
                }]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },

                files: {
                    'index.html': 'index_org.html'
                }

            }
        },

        cssmin: {
            target: {
                files: [{
                expand: true,
                cwd: 'css/',
                src: ['*.css', '*.min.css'],
                dest: 'css/',
                ext: '.min.css'
                }]
            }
        },

        imagemin: {
            jpg: {
                options: {
                    progressive: true
                },

                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['profilepic.jpg'],
                    dest: 'img/'
                }]
            }
        }

  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.registerTask('default', ['responsive_images']);
};