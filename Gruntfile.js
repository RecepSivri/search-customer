module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
        development:{
          options: {
            port: 9000,
            livereload: true,
            base: "./",
            open: true,
            middleware: function(connect, options, middlewares) {
              middlewares.unshift(
                  require("grunt-connect-proxy/lib/utils")
                      .proxyRequest
              );
              return middlewares;
          }
        }
      }     
    },
    app: {
      scripts: [
            'dist/search-customer.min.js',
          ]
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        'esversion': 6,
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed',
          compass: false,
          sourcemap: false
        },
        files: {
          'dist/styles.min.css': [
              'src/styles.scss'
          ]
        }
      }
    },
    watch: {
      files: ['src/*.scss', 'src/*.js'],
      tasks: ['sass', 'uglify'],
      js: {
        files: ['<%= jshint.files %>'],
        options: {
          livereload: true
        }
      },
      html: {
          files: ['**/*.html' ],
          options: {
            livereload: true
          }
      },
      css: {
          files: ['**/*.css'],
          options: {
            livereload: true
          }
      },
        options: {liveload: true}
      }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');  
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks("grunt-connect-proxy");
  grunt.loadNpmTasks('grunt-contrib-sass');
  
  grunt.registerTask('test', ['jshint', 'qunit']);
  grunt.registerTask("serve", "connect:development");


  grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify','sass', 'connect:development', 'watch']);

};