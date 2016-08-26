'use strict';

var juke = angular.module('juke', ['ui.router']);

juke.run(function($rootScope) {
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
        console.error('Error transitioning from "' + fromState.name + '" to "' + toState.name + '":', error);
    });
});

/* Cool beginning exercise!

juke.controller('temp', function($scope) {
    $scope.toFrequency = function(str) {
        str = str || '';
        return str.split('').reduce(function(freq, char) {
            char = char.toLowerCase();
            freq[char] = (freq[char] || 0);
            freq[char]++;
            return freq;
        }, {});
    };
    $scope.alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
});*/
