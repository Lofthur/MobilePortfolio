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

                files: {
                    'production/views/images/pizzeria.jpg' : 'source/views/images/pizzeria.jpg',
                }
            }
        },

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },

                files: {
                    'production/index.html': 'source/index.html'
                }

            }
        },

        cssmin: {
            target: {
                files: [{
                expand: true,
                cwd: 'source/css/',
                src: ['*.css'],
                dest: 'production/css/',
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
                   'production/img/profilepic.jpg': 'source/img/profilepic.jpg',
                   'production/views/images/pizzeria.jpg': 'source/views/images/pizzeria-115.jpg'
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