var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}


var printPlaylists = function () {

  //assigned the playlist to a variable called playlists
  var playlists = library.playlists;
  //console.log('Playlist: ', playlists);

  for (var playlistId in playlists) {
    var playlist = playlists[playlistId];
    var tracks = playlist.tracks;
    console.log(playlistId + ': ', playlist.name + "-" + tracks.length + "tracks");

  }
};

printPlaylists();

var printTracks = function () {
  var tracks = library.tracks;

  for(var trackId in tracks) {
    var track = tracks[trackId];
    console.log(trackId + ': '+ track.name + ' by ' + track.artist + ' (' + track.album + ')');
  }

}

printTracks();


var printPlaylist = function(playlistId) {
  var playlist = library.playlists[playlistId];
  console.log(playlistId + ': ', playlist.name + "-" + playlist.tracks.length + "tracks");

   for(var trackId of playlist.tracks) {
    var track = library.tracks[trackId];

  console.log(trackId + ': '+ track.name + ' by ' + track.artist + ' (' + track.album + ')');
  }
}


printPlaylist('p01');

// // adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  var playlist = library.playlists[playlistId];
  playlist.tracks.push(trackId)
  console.log(library.playlists)
}

addTrackToPlaylist('t01', 'p01');

// // generates a unique id
// // (use this for addTrack and addPlaylist)

  var uid = function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// // adds a track to the library

var addTrack = function (name, artist, album) {

  var trackId =uid();

   var newTrack = {
    id: trackId,
    name: name,
    artist: artist,
    album: album
   };
   library.tracks[trackId] = newTrack;
   //Add the new track object to the list of existing tracks

   console.log(newTrack);
};

addTrack("Shape of you", "Ed Sheeran", "Divide");


// // adds a playlist to the library

var addPlaylist = function (name) {
  var trackId = uid();

  var newPlaylist = {
    id: 'p03',
    name: name,
    tracks: uid()
  };
  library.playlists = newPlaylist;

  console.log(newPlaylist);
};
addPlaylist('Tallahassee');
