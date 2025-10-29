import { genres, podcasts } from "./modules/data.js";
import { createOpt } from "./modules/createOption.js";
import { createCard } from "./modules/createCard.js";
import { makePodcast } from "./modules/podcastFactory.js";
const gDropdown = document.getElementById("genre-options");
const podGrid = document.getElementById("pod-grid");

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

  podGrid.appendChild(podcastCard);
});
