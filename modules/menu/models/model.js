define(function (require) {

    "use strict";

    var menuData = {
            "top" : {
                "visible" : true,
                "left" : {
                    "visible" : true,
                    "title" : "Sample",
                    "icon" : "",
                    "route" : "",
                    "active" : false
                },
                "middle" : {
                    "visible" : true,
                    "title" : "Sample",
                    "icon" : "",
                    "route" : "",
                    "active" : false
                },
                "right" : {
                    "visible" : true,
                    "title" : "Sample",
                    "icon" : "",
                    "route" : "",
                    "active" : false
                }
            },
            "bottom" : {
                "visible" : true,
                "left" : {
                    "visible" : true,
                    "title" : "Sample",
                    "icon" : "",
                    "route" : "",
                    "active" : false
                },
                "middle" : {
                    "visible" : true,
                    "title" : "Sample",
                    "icon" : "",
                    "route" : "",
                    "active" : false
                },
                "right" : {
                    "visible" : true,
                    "title" : "Sample",
                    "icon" : "",
                    "route" : "",
                    "active" : true
                }
            }
        },

    Menu =  new Backbone.Model(menuData);
    
    return {
        Menu: Menu
    };


});