import { genres, podcasts } from "./modules/data.js";
import { createOpt } from "./modules/createOption.js";
import { createCard } from "./modules/createCard.js";
const gDropdown = document.getElementById("genre-options");
const podGrid = document.getElementById("pod-grid");

genres.forEach((genre) => {
  createOpt(gDropdown, genre.title);
});

podcasts.forEach((podcast) => {
  createCard(podGrid, podcast.image, podcast.title);
});
