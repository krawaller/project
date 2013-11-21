//Filename: config.js
/*global require:true, define: true */

console.log("System: RequireJS is being configurated...");

//Configurating requireJS
require.config({
    urlArgs: "bust=" + (new Date()).getTime(),
    paths: {
        view: "app/view",

        jquery: "lib/jquery",
        underscore: "lib/underscore",               //AMD-version
        backbone: "lib/backbone",                   //AMD-version
        localstorage: "lib/backbone-localstorage"
    }
});

//Running main moudle
require(['app/main'], function (a_main) {
    a_main.run();
});

