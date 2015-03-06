module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    uglify: {

      mini_src: {

        options: {
          banner: '/*! <%= pkg.name %>.min.js v<%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },

        files: {
          './<%= pkg.name %>.min.js': 'src/<%= pkg.name %>.js'
        }
      }
    },

    watch: {

      options: {
        livereload: true
      },

      uglify: {
        files: ['src/*.js'],
        tasks: ['uglify'],
        options: {
          spawn: false,
          debounceDelay: 1000
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['uglify']);

};