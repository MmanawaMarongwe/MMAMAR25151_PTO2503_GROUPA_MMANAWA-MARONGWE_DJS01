import { genres, podcasts, seasons } from "./modules/data.js";
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
  const pod = makePodcast(podcast, genres, seasons);
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
      description: pod.description,
      genreTags: pod.genreNames(),
      lastUpdate: pod.formattedUpdatedAt(),
      seasonsInfo: pod.seasonTitles(),
    });
    modalContainer.appendChild(modal);
    modalContainer.style.display = "block";
    const { openModal, closeModal } = modalState(modalContainer);
    openModal(modal);

    modalContainer.addEventListener("click", (e) => {
      if (e.target === modalContainer) closeModal();
    });

    modal.querySelector(".modal-close").addEventListener("click", (e) => {
      e.stopPropagation();
      closeModal();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });
  });

  podGrid.appendChild(podcastCard);
});
