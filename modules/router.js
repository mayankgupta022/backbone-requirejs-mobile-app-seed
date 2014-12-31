define(function (require) {

    "use strict";

    var ShellView = require('shell/views/shell'),
        MenuView = require('menu/views/menu'),
        $body     = $('body'),
        shellView,
        menuView,
        $content;

    return Backbone.Router.extend({

        routes: {
            "": "home",
        },

        initialize: function () {
            Backbone.View.prototype.close = function () {
                console.log('Closing view ' + this);
                if (this.beforeClose) {
                    this.beforeClose();
                }
                this.remove();
                this.unbind();
            };

            shellView = new ShellView();
            $body.html(shellView.render().el);
            $content = $("#content");
            menuView = new MenuView({el: $content});
            menuView.render();
        },

        home: function () {
            // homeView.delegateEvents(); // delegate events when the view is recycled
            require(["home/views/home"], function (HomeView) {
                var homeView = new HomeView({el: $content});
                homeView.render();
                shellView.selectMenuItem('home-menu');
            });
        }

        // contact: function () {
        //     require(["app/views/Contact"], function (ContactView) {
        //         var view = new ContactView({el: $content});
        //         view.render();
        //         shellView.selectMenuItem('contact-menu');
        //     });
        // }

    });

});