
import service from "./config.services";

//* Creamos un servicio que busca todos los archivos de juegos.

const listGamesService = () => {
    console.log("Working GamesList.");
    return service.get("/videogames")
}

const listNextGamesService = () => {
    console.log("Working GamesListNext.");
    return service.get("/videogames/next")
}

const listPreviousGamesService = () => {
    console.log("Working GamesListPrevious.");
    return service.get("/videogames/previous")
}

const listGamesDetailsService = (id) => {
    console.log("Working details.");
    return service.get(`/videogames/${id}/details`)
}

const listGamesTrailersService = (id) => {
    console.log("Working trailers.");
    return service.get(`/videogames/${id}/trailers`)
}

const listGamesDbService = (id, body) => {
    console.log("Working collections.");
    return service.post(`/videogames/${id}/collections`, body)
}

const gamesByPlatformService = () => {
    console.log("Working Platforms");
    return service.get("/videogames/platform")
}

const commentsService = (id, body) => {
    console.log("Working adding comment");
    return service.post(`/videogames/${id}/comments`, body)
}

const viewCommentsService = (id) => {
    console.log("Working comments");
    return service.get(`/videogames/${id}/comments`)
}

export {
    listGamesService,
    listGamesDetailsService,
    listGamesTrailersService,
    listGamesDbService,
    commentsService,
    viewCommentsService,
    listNextGamesService,
    listPreviousGamesService,
    gamesByPlatformService
}