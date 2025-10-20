import { genres } from "./modules/data.js";
import { createGenreOpt } from "./modules/GenreFilter.js";

genres.forEach((genre) => {
  createGenreOpt(genre);
  console.log(genre);
});
