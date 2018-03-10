var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

var reporter = new HtmlScreenshotReporter({
  dest: 'target/',
  filename: 'my-report.html'
});

// An example configuration file.
exports.config = {
    directConnect: true,
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      'browserName': 'chrome'
    },
    
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',
  
    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['./*.spec.ts'],

    beforeLaunch: function(){
      require('ts-node').register({
        project: 'tsconfig.json'
      });

      return new Promise(function(resolve){
        reporter.beforeLaunch(resolve);
      });
    },

    onPrepare: function() {
      jasmine.getEnv().addReporter(reporter);
      jasmine.getEnv().addReporter(new SpecReporter({
        spec: {
          displayStacktrace: true
        },
        summary: {
          displayDuration: false
        }
      }));
    },

     // Options to be passed to Jasmine.
     jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    },

  afterLaunch: function (exitCode) {
      return new Promise(function(resolve){
        reporter.afterLaunch(resolve.bind(this, exitCode));
      });
    }
  };