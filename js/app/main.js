//Filename: main.js
/*global require:true, define: true */

console.log("System: Loading main module...");

define(['backbone', 'jquery', 'underscore','view/indexView'], function(a_backbone, $, _ , a_indexView) {
    return {
        run: function () {
            var indexView = new a_indexView();
        }
    }
});

