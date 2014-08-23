'use strict';
/**
* Created with moodtrackr-full.
* User: jlucasps
* Date: 2014-08-21
* Time: 09:17 PM
* To change this template use Tools | Templates.
*/

/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }]);
