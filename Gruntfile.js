'use strict'

var ngrok = require('ngrok');

module.exports = function(grunt) {

  // Load grunt tasks
  require('load-grunt-tasks')(grunt);

  // Grunt configuration
  grunt.initConfig({
    // pagespeed
    pagespeed: {
      options: {
        nokey: true,
        locale: "en_GB",
        threshold: 90
      },
      desktop: {
        options: {
          strategy: "desktop"
        }
      },
      mobile: {
        options: {
          strategy: "mobile"
        }
      }
    },
    copy: {
      main: {
        expand: true,
        cwd: 'src/',
        src: '**',
        dest: 'dist/',
      },
    },
    clean: {
      dist: {
        src: 'dist'
      }
    },
    image: {
      main: {
        files: [{
          expand: true,
          cwd: 'dist/img',
          src: ['**/*.{png,jpg,gif,svg}'],
          dest: 'dist/img'
        }]
      },
      secondary: {
        files: [{
          expand: true,
          cwd: 'dist/views/images',
          src: ['**/*.{png,jpg,gif,svg}'],
          dest: 'dist/views/images'
        }]
      }
    },
    uglify: {
      main: {
        files: {
          'dist/js/analytics.js': ['dist/js/analytics.js'],
          'dist/js/perfmatters.js': ['dist/js/perfmatters.js']
        }
      },
      secondary: {
        files: {
          'dist/views/js/main.js': ['dist/views/js/main.js']
        }
      }
    },
    cssmin: {
      main: {
        files: {
          'dist/css/style.css': ['dist/css/style.css']
        }
      },
      print: {
        files: {
          'dist/css/print.css': ['dist/css/print.css']
        }
      },
      bootstrap: {
        files: {
          'dist/views/css/bootstrap-grid.css': ['dist/views/css/bootstrap-grid.css']
        }
      },
      style: {
        files: {
          'dist/views/css/style.css': ['dist/views/css/style.css']
        }
      }
    },
    minifyHtml: {
      options: {
        cdata: true
      },
      dist: {
        files: {
          'dist/index.html': 'dist/index.html',
          'dist/project-2048.html': 'dist/project-2048.html',
          'dist/project-mobile.html': 'dist/project-mobile.html',
          'dist/project-webperf.html': 'dist/project-webperf.html',
          'dist/views/pizza.html': 'dist/views/pizza.html'
        }
      }
    }
  });

  // Register customer task for ngrok
  grunt.registerTask('psi-ngrok', 'Run pagespeed with ngrok', function() {
    var done = this.async();
    var port = 8000;

    ngrok.connect(port, function(err, url) {
      if (err !== null) {
        grunt.fail.fatal(err);
        return done();
      }
      grunt.config.set('pagespeed.options.url', url);
      grunt.task.run('pagespeed');
      done();
    });
  });

  // Register tasks
  grunt.registerTask('dist', ['clean', 'copy', 'uglify', 'cssmin', 'minifyHtml', 'image']);
  grunt.registerTask('default', ['psi-ngrok']);
}
