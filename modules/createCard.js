export function createCard({
  cover,
  name,
  seasons,
  genreTags = [],
  lastUpdate,
}) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img class="cover" src="${cover}" alt="${name}">
    <h4>${name}</h4>
    <p class="seasons-text">♡ ${seasons} seasons</p>
    <div class="genre-tags">
      ${genreTags.map((genre) => `<span class="tag">${genre}</span>`).join("")}
    </div>
    <p class="text-muted">Updated ${lastUpdate}</p>
  `;
  return card;
}
