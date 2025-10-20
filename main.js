import { genres } from "./modules/data.js";
import { createOpt } from "./modules/createOption.js";
const gDropdown = document.getElementById("genre-options");

genres.forEach((genre) => {
  createOpt(gDropdown, genre.title);
});
