const { Router } = require("express");
const { addFilm, find, update, deleteFilm } = require("./movieControllers");
const movieRouter = Router();

movieRouter.post("/movie", addFilm);
movieRouter.get("/movie", find); //find and list don't need seperate endpoints?
movieRouter.put("/movie", update);
movieRouter.delete("/movie", deleteFilm);

module.exports = movieRouter;
