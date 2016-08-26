/*global juke*/
'use strict';

juke.controller('NewPlaylistsCtrl', function($scope, $state, PlaylistFactory) {
    $scope.createPlaylist = function(newPlaylist) {
        $scope.newPlaylist = '';
        $scope.newPlaylistForm.$setPristine();
        PlaylistFactory.create(newPlaylist)
            .then(function(playlist) {
                console.log('The new playlist', playlist);
                $state.go('onePlaylist', {
                    id: playlist.id
                });
            });
    }

});

juke.controller('PlaylistsCtrl', function($scope, PlaylistFactory) {
    PlaylistFactory.fetchAll()
        .then(function(allPlaylists) {
            $scope.playlists = allPlaylists;
        });
});

juke.controller('PlaylistCtrl', function($scope, $stateParams, PlaylistFactory, SongFactory, PlayerFactory) {
    PlaylistFactory.fetchById($stateParams.id)
        .then(function(playlist) {
            $scope.playlist = playlist;
            $scope.toggle = PlayerFactory.toggle.bind(PlayerFactory, $scope.playlist.songs);
            $scope.getCurrentSong = PlayerFactory.getCurrentSong.bind(PlayerFactory);
            $scope.isPlaying = PlayerFactory.isSongPlaying.bind(PlayerFactory);
        });

    SongFactory.fetchAll()
        .then(function(songs) {
            $scope.songs = songs;
        });

    $scope.addSongToPlaylist = function(song, playlist) {
		$scope.selectedSong = 0;
        PlaylistFactory.addSongToPlaylist(song, playlist)
            .then(function(addedSong) {
				addedSong = SongFactory.convert(addedSong)
                $scope.playlist.songs.push(addedSong);
            });
    }
});
