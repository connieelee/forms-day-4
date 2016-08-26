/*global juke*/
'use strict';

juke.config(function($stateProvider) {
	$stateProvider
	.state('newPlaylist', {
		url: '/playlists/new',
		templateUrl: '/js/playlist/templates/newPlaylist.html',
		controller: 'NewPlaylistsCtrl'
	})

	.state('onePlaylist', {
		url: '/playlists/:id',
		templateUrl: '/js/playlist/templates/playlist.html',
		controller: 'PlaylistCtrl'
	});
});
