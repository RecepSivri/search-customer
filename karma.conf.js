module.exports = function(config) {
  config.set({

    basePath: '',

    plugins:['karma-jasmine','karma-chrome-launcher', 'karma-coverage'],

    frameworks: ['jasmine'],

    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/app.js',
      'test/test.spec.js',
    ],

    exclude: [
    ],

    preprocessors: {
      'src/*.js': ['coverage']
    },


    reporters: ['progress','coverage'],

    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,


    autoWatch: true,


    browsers: ['Chrome'],

    singleRun: false,


    concurrency: Infinity
  })
}
