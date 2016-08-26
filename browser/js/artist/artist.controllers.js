'use strict';

/* ARTISTS (PLURAL) CONTROLLER */

juke.controller('ArtistsCtrl', function($scope, allArtists) {

    $scope.artists = allArtists;

});

/* ARTIST (SINGULAR) CONTROLLER */

juke.controller('ArtistCtrl', function($scope, PlayerFactory, theArtist) {

    $scope.artist = theArtist;

    $scope.toggle = PlayerFactory.toggle.bind(PlayerFactory, $scope.artist.songs);
    $scope.getCurrentSong = PlayerFactory.getCurrentSong.bind(PlayerFactory);
    $scope.isPlaying = PlayerFactory.isSongPlaying.bind(PlayerFactory);


});