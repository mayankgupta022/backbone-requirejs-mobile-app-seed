define(function (require) {

    "use strict";

    var Backbone = require('backbone'),
        menuData = {
            "top" : {
                "visible" : true,
                "left" : {
                    "visible" : true,
                    "title" : "topLeft",
                    "icon" : "",
                    "route" : "try/2",
                    "active" : false
                },
                "middle" : {
                    "visible" : true,
                    "title" : "Home",
                    "icon" : "",
                    "route" : "blank",
                    "active" : false
                },
                "right" : {
                    "visible" : true,
                    "title" : "topRight",
                    "icon" : "",
                    "route" : "",
                    "active" : false
                }
            },
            "bottom" : {
                "visible" : true,
                "left" : {
                    "visible" : true,
                    "title" : "bottomLeft",
                    "icon" : "",
                    "route" : "",
                    "active" : false
                },
                "middle" : {
                    "visible" : true,
                    "title" : "bottomMiddle",
                    "icon" : "",
                    "route" : "",
                    "active" : false
                },
                "right" : {
                    "visible" : true,
                    "title" : "bottomRight",
                    "icon" : "",
                    "route" : "",
                    "active" : true
                }
            }
        };

    return {
        MenuData: menuData
    };


});