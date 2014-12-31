define(function (require) {

    "use strict";

    var Backbone = require('backbone'),
        menuData = {
            "top" : {
                "visible" : true,
                "left" : {
                    "visible" : true,
                    "title" : "Sample",
                    "icon" : "",
                    "route" : ""
                },
                "middle" : {
                    "visible" : true,
                    "title" : "Sample",
                    "icon" : "",
                    "route" : ""
                },
                "right" : {
                    "visible" : true,
                    "title" : "Sample",
                    "icon" : "",
                    "route" : ""
                }
            },
            "bottom" : {
                "visible" : true,
                "left" : {
                    "visible" : true,
                    "title" : "Sample",
                    "icon" : "",
                    "route" : ""
                },
                "middle" : {
                    "visible" : true,
                    "title" : "Sample",
                    "icon" : "",
                    "route" : ""
                },
                "right" : {
                    "visible" : true,
                    "title" : "Sample",
                    "icon" : "",
                    "route" : ""
                }
            }
        },

    Menu =  new Backbone.Model(menuData);
    
    return {
        Menu: Menu
    };


});