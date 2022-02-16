const Movie = require("./movieModel");
const errorDescribe = (error, res) => {
  console.log(error);
  res.status(500).send({ error: error.message });
};

exports.addFilm = async (req, res) => {
  try {
    const newMovie = await Movie.create(req.body);
    res.status(200).send({ movie: newMovie });
  } catch (error) {}
};

// I don't think this func is needed...
// exports.list = async (req, res) => {
//   try {
//     const movies = await Movie.find({});
//     res.status(200).send({ movies });
//   } catch (error) {
//     errorDescribe(error, res);
//   }
// };

exports.find = async (req, res) => {
  try {
    const movies = await Movie.find(req.body);
    res.status(200).send({ movies });
  } catch (error) {
    errorDescribe(error, res);
  }
};

exports.update = async (req, res) => {
  try {
    const apiMessage = await Movie.updateOne(req.body.search, req.body.update);
    res.status(200).send({ apiMessage });
  } catch (error) {
    errorDescribe(error, res);
  }
};

exports.deleteFilm = async (req, res) => {
  try {
    const apiMessage = await Movie.findOneAndDelete(req.body);
    res.status(200).send({ apiMessage });
  } catch (error) {
    errorDescribe(error, res);
  }
};
