import { genres, podcasts, seasons } from "./modules/data.js";
import { createPodcastApp } from "./modules/createPodcastApp.js";
const gDropdown = document.getElementById("genre-options");
const podGrid = document.getElementById("pod-grid");
const modalContainer = document.getElementById("modal-overlay");

const podcastApp = createPodcastApp({
  genres,
  podcasts,
  seasons,
  elements: { gDropdown, podGrid, modalContainer },
});

podcastApp.init();
