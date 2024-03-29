'use strict';


requirejs.config({
    //baseUrl: '../',
    paths: {
        'angular': '../components/angular/angular',
        'angular-route': '../components/angular-route/angular-route'
    },
    shim: {
      angular: {
          exports : 'angular'
      }
    }
});


require( [
    'angular',
    'angular-route',
    'angular-start',
    'services/services',
    'controllers/controllers',
    'filters/filters',
    'directives/directives'
], function() {

    var app = {
        initialize: function () {
            angular.bootstrap(document, ['myApp']);
        }
    };

    app.initialize();

});
