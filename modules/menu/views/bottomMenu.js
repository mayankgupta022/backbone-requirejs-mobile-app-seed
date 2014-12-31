define(function (require) {

    "use strict";

    var Backbone = require('backbone'),
        tpl      = require('text!menu/tpl/bottomMenu.html'),
        template = _.template(tpl);

    return Backbone.View.extend({

        render: function () {
        	console.log(this.model.attributes);
            this.$el.html(template(this.model.attributes.bottom));
            return this;
        }

    });

});