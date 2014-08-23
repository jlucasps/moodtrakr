'use strict';
/**
* Created with moodtrackr-full.
* User: jlucasps
* Date: 2014-08-21
* Time: 09:17 PM
* To change this template use Tools | Templates.
*/

/* Directives */

angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
