module.exports = function (config) {
  config.set({
    ...require('./karma.default'),
    port: 1111,
    logLevel: config.LOG_INFO,
    browsers: ['HeadlessChrome'],
    customLaunchers: {
      HeadlessChrome: {
        base: 'ChromeHeadless',
        flags: [
          '--no-sandbox', // required to run without privileges in Docker
          '--disable-web-security',
          '--disable-gpu',
          '--remote-debugging-port=9222',
        ],
      },
    },
  });
};
