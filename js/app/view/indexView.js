/*global require:true, define: true */

define(['backbone', 'jquery'], function(Backbone, $) {
    var indexView = Backbone.View.extend({
        initialize: function () {
            console.log('Sweeet');
            $("#content").html("view-anrop fungerar!");
        }
    });

    return indexView;

});
