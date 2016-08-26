/* global juke */
'use strict';

/* ALBUMS (SINGULAR) CONTROLLER */

juke.controller('AlbumCtrl', function ($scope, PlayerFactory, theAlbum) {

  $scope.album = theAlbum;

  $scope.toggle = PlayerFactory.toggle.bind(PlayerFactory, $scope.album.songs);
  $scope.getCurrentSong = PlayerFactory.getCurrentSong.bind(PlayerFactory);
  $scope.isPlaying = PlayerFactory.isSongPlaying.bind(PlayerFactory);

});

/* ALBUMS (PLURAL) CONTROLLER */

juke.controller('AlbumsCtrl', function ($scope, allAlbums) {

  $scope.albums = allAlbums;

});
