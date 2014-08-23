'use strict';
/**
* Created with moodtrackr-full.
* User: jlucasps
* Date: 2014-08-21
* Time: 09:16 PM
* To change this template use Tools | Templates.
*/

/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1');
