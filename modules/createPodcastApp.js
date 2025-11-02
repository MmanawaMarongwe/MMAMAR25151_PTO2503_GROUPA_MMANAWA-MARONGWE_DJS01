import { createOpt } from "./createOption.js";
import { createCard } from "./createCard.js";
import { makePodcast } from "./makePodcast.js";
import { createModal } from "./createModal.js";
import { modalState } from "./modalState.js";
import { renderModal } from "./renderModal.js";

export function createPodcastApp({ genres, podcasts, seasons, elements }) {
  const { gDropdown, podGrid, modalContainer } = elements;

  // Populate genre dropdown
  genres.forEach((genre) => {
    createOpt(gDropdown, genre.title);
  });

  // Render each podcast
  podcasts.forEach((podcast) => {
    const pod = makePodcast(podcast, genres, seasons);

    const podcastCard = createCard({
      cover: pod.image,
      name: pod.title,
      seasons: pod.seasons,
      genreTags: pod.genreNames(),
      lastUpdate: pod.formattedUpdatedAt(),
    });

    // Attach event listener to open modal
    podcastCard.addEventListener("click", () => {
      renderModal(pod, modalContainer);
    });
    // Add to grid
    podGrid.appendChild(podcastCard);
  });

  return {
    init() {
      console.log("🎧 Podcast app initialized successfully!");
    },
  };
}
