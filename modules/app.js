require.config({

    baseUrl: '../assets/lib',

    paths: {
        backbone: '../backbone',
        underscore: '../underscore',
        bootstrap: '../bootstrap',
        jquery: '../jquery',
    },

    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
});

require(['jquery', 'backbone', 'router'], function ($, Backbone, Router) {
    var router = new Router();
    Backbone.history.start();
});