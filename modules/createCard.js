export function createCard({
  cover,
  name,
  seasons,
  genreTags = [],
  lastUpdate,
}) {
  const card = document.createElement("div");
  card.className = "card";
  const image = document.createElement("img");
  const title = document.createElement("p");
  const nSeasons = document.createElement("p");
  nSeasons.className = "seasons-text";
  const tags = document.createElement("div");
  tags.className = "genre-tags";
  const dateUp = document.createElement("p");
  dateUp.className = "updated-date";

  genreTags.forEach((genre) => {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = genre;
    tags.append(tag);
  });

  image.src = cover;
  image.className = "cover";
  title.textContent = name;
  nSeasons.textContent = `${seasons} seasons`;
  dateUp.textContent = lastUpdate;
  card.append(image, title, nSeasons, tags, dateUp);
  return card;
}
