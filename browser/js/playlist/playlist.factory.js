/*global juke*/

juke.factory('PlaylistFactory', function($http, SongFactory) {
    var cachedPlaylists = [],
        cachedSongs = [];

    return {
        fetchAll: function() {
            return $http.get('/api/playlists')
                .then(function(response) {
                    angular.copy(response.data, cachedPlaylists);
                    return cachedPlaylists;
                });
        },
        create: function(data) {
            return $http.post('/api/playlists', data)
                .then(function(response) {
                    var playlist = response.data;
                    cachedPlaylists.push(playlist);
                    return playlist;
                })
        },
        fetchById: function(playlistId) {
            return $http.get('/api/playlists/' + playlistId)
                .then(function(response) {
					response.data.songs.map(song => SongFactory.convert(song));
                    angular.copy(response.data, cachedSongs);
                    return cachedSongs;
                });
        },
        addSongToPlaylist: function(song, playlist) {
            return $http.post('/api/playlists/' + playlist.id + '/songs', song)
                .then(function(response) {
                    var addedSong = response.data;
                    cachedSongs.push(addedSong);
                    return addedSong;
                });
        }
    }
});
