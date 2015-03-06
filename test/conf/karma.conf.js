module.exports = function (config) {
    config.set({

        basePath: '../..',

        frameworks: ['jasmine', 'sinon', 'radii'],

        files: [
            // the libraries
            'src/public/scripts/lib/moment/min/moment.min.js',
            'src/public/scripts/lib/jquery/dist/jquery.min.js',

            // spec helpers
            'test/lib/jasmine/namespace.js',
            'test/lib/jasmine/jasmine-grammar.js',
            'test/lib/jasmine/jasmine-sinon.js',
            'test/lib/jasmine/jasmine-jquery.js',
            'test/lib/jasmine/jasmine-helper.js',

            // the src
            'src/**/*.js',

            // the tests
            'test/unit/**/*.js'
        ],

        exclude: [],

        preprocessors: {
        },

        reporters: ['progress'],

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO, // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG

        autoWatch: false,

        browsers: ['Chrome'],

        captureTimeout: 60000,

        singleRun: false

    });
};