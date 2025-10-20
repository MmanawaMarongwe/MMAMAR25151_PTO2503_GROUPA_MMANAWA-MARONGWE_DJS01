import { genres } from "./modules/data.js";
import { createOpt } from "./modules/GenreFilter.js";
const gDropdown = document.getElementById("genre-options");

genres.forEach((genre) => {
  createOpt(gDropdown, genre.title);
  console.log(genre);
});
