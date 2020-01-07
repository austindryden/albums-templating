const albumData = require('./albumsData.json');
// console.log(albumData);
// console.log(typeof albumData);
// console.log(Object.keys(albumData));
// console.log(albumData.albums);

function getAllAlbums(){
    let albumString = "<ul>"
    
    for (let album of albumData["albums"]){
        albumString += `<a href="/album/${album.id}"><li> ${album.title} by ${album.artist}</a>`;
    }
    albumString += "</ul>";
    return albumString;
}

function getAlbum(albumID){
    for(let album of albumData["albums"]){
        if (albumID == album.id){
            return `<a href="/album/${album.id}/song">${album.title} by ${album.artist}</a>`;
        }
    }
    return "no album found";
}

function getAlbumJSON(albumID){
    for(let album of albumData["albums"]){
        if (albumID == album.id){
            return album;
        }
    }
    return {};
}

function getSongFromAlbum(albumID,songID){
    for(let album of albumData["albums"]){
        if (albumID == album.id){
            for (let song of album.songs){
                if (songID == song.id){
                    return `${song.title}, off the album ${album.title} by ${album.artist}`;
                }
            }
        }
    }
    return "Song not found!";
}

function getSongJSON(albumID,songID){
    for(let album of albumData["albums"]){
        if (albumID == album.id){
            for (let song of album.songs){
                if (songID == song.id){
                    return song;
                }
            }
        }
    }
    return {};
}

function getAllSongs(albumID){
    for(let album of albumData["albums"]){
        if (albumID == album.id){
            let songString = `Songs from the album ${album.title} by ${album.artist}:` + "<br><ul>";
            for (let song of album.songs){
                songString += "<li>" + song.title;
            }
            songString += "</ul>"
            return songString;
        }
    }
    return "no album found";
}

module.exports = {
    getAllAlbums,
    getAlbum,
    getSongFromAlbum,
    getAllSongs,
    getAlbumJSON,
    getSongJSON
};