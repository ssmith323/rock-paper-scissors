module.exports = {
  basePath: '',
  frameworks: ['jasmine', '@angular-devkit/build-angular'],
  plugins: [
    require('karma-jasmine'),
    require('karma-chrome-launcher'),
    require('karma-jasmine-html-reporter'),
    require('karma-coverage-istanbul-reporter'),
    require('@angular-devkit/build-angular/plugins/karma'),
  ],
  client: {
    clearContext: false, // leave Jasmine Spec Runner output visible in browser
  },
  coverageIstanbulReporter: {
    dir: require('path').join(__dirname, './coverage/mmp-frontend'),
    reports: ['html', 'lcovonly', 'text-summary'],
    fixWebpackSourcePaths: true,
    thresholds: {
      emitWarning: false, // set to `true` to not fail the test command when thresholds are not met
      // thresholds for all files
      global: {
        statements: 95,
        lines: 95,
        branches: 88,
        functions: 100,
      },
      // thresholds per file
      // each: {
      //   statements: 100,
      //   lines: 100,
      //   branches: 100,
      //   functions: 100,
      // },
    },
  },
  reporters: ['progress', 'kjhtml'],
  port: 9876,
  colors: true,
  autoWatch: true,
  browsers: ['Chrome'],
  singleRun: false,
  restartOnFileChange: true,
};
