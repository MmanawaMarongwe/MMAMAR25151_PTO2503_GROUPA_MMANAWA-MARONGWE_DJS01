import { genres, podcasts } from "./modules/data.js";
import { createOpt } from "./modules/createOption.js";
import { createCard } from "./modules/createCard.js";
import { makePodcast } from "./modules/makePodcast.js";
import { createModal } from "./modules/createModal.js";
import { modalState } from "./modules/modalState.js";
const gDropdown = document.getElementById("genre-options");
const podGrid = document.getElementById("pod-grid");
const modalContainer = document.getElementById("modal-overlay");

genres.forEach((genre) => {
  createOpt(gDropdown, genre.title);
});

podcasts.forEach((podcast) => {
  const pod = makePodcast(podcast, genres);
  const podcastCard = createCard({
    cover: pod.image,
    name: pod.title,
    seasons: pod.seasons,
    genreTags: pod.genreNames(),
    lastUpdate: pod.formattedUpdatedAt(),
  });

  podcastCard.addEventListener("click", () => {
    const modal = createModal({
      cover: pod.image,
      name: pod.title,
      seasons: pod.seasons,
      genreTags: pod.genreNames(),
      lastUpdate: pod.formattedUpdatedAt(),
    });
    modalContainer.appendChild(modal);
    modalState(modal).openModal;
    console.dir(modalContainer);
  });

  podGrid.appendChild(podcastCard);
});
