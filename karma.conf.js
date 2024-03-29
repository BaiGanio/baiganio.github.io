// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
    config.set({
      basePath: '',
      browserNoActivityTimeout: 600000,
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
      plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('karma-jasmine-html-reporter'),
        require('karma-coverage'),
        require('@angular-devkit/build-angular/plugins/karma'),
        require('karma-spec-reporter')
      ],
      angularCli: {
        environment: 'dev'
      },
      client: {
        jasmine: {
          // you can add configuration options for Jasmine here
          // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
          // for example, you can disable the random execution with `random: false`
          // or set a specific seed with `seed: 4321`
        },
        clearContext: false // leave Jasmine Spec Runner output visible in browser
      },
      jasmineHtmlReporter: {
        suppressAll: true // removes the duplicated traces
      },
      coverageReporter: {
        dir: require('path').join(__dirname, './coverage'),
        subdir: '.',
        reporters: [
            { type: 'html' },
            { type: 'text' },
            { type: 'json' },
            { type: 'lcovonly' },
            { type: 'cobertura' }
        ],
        check: {
            global: {
                statements: 75,
                branches: 75,
                functions: 75,
                lines: 75,
            }
        },
        watermarks: {
          statements: [ 50, 80 ],
          functions: [ 50, 80 ],
          branches: [ 50, 80 ],
          lines: [ 50, 80 ]
        }
      },
      reporters: ['kjhtml', 'spec', 'coverage'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ['ChromeHeadless'],
      singleRun: false,
      restartOnFileChange: true,
      exclude: ["node_modules"]
    });
  };
