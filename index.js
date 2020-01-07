const http = require('http');
const express = require("express");
// const fs = require('fs');
const album = require("./albums");
const app = express();
const server = http.createServer(app);
const PORT = "3003";
const es6Renderer = require("express-es6-template-engine");

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');
// const albumData = fs.readFileSync('./albumsData.json').toString();

app.get('/', (request, response)=>{
    response.render('home', {
        'locals': {
            pageTitle: "home",
            body: "go somewhere so I can do something"
        },
        partials:{
            head:"/partials/head",
            tail: "/partials/tail"
        }
    });  
});

app.get('/album', (request, response) =>{
    response.render('home', {
        'locals': {
            pageTitle: "All Albums",
            body: album.getAllAlbums()
        },
        partials:{
            head:"/partials/head",
            tail: "/partials/tail"
        }
    });    
});

app.get('/album/:albumID', (request, response) =>{
    response.render('home', {
        'locals': {
            pageTitle: "This Album",
            body: album.getAlbum(request.params.albumID)
        },
        partials:{
            head:"/partials/head",
            tail: "/partials/tail"
        }
    });
});

app.get('/album/:albumID/song', (request, response) =>{
    response.render('home', {
        'locals': {
            pageTitle: "Songs on This Album",
            body: album.getAllSongs(request.params.albumID)
        },
        partials:{
            head:"/partials/head",
            tail: "/partials/tail"
        }
    });
});

app.get('/album/:albumID/song/:songID', (request, response) =>{
    response.render('home', {
        'locals': {
            pageTitle: "A particular Song on This Album",
            body: album.getSongFromAlbum(request.params.albumID,request.params.songID)
        },
        partials:{
            head:"/partials/head",
            tail: "/partials/tail"
        }
    });
});

app.get('/API/album/:albumID', (request, response) =>{
    response.json(album.getAlbumJSON(request.params.albumID));
});

app.get('/API/album/:albumID/song/:songID', (request, response) =>{
    response.json(album.getSongJSON(request.params.albumID,request.params.songID));
});

server.listen(PORT, () =>{
    console.log(`listening on port ${PORT}`);
});