export function createCard(gridEl, cover, name) {
  const card = document.createElement("div");
  card.className = "card";
  const image = document.createElement("img");
  const title = document.createElement("p");

  image.src = cover;
  image.className = "cover";
  title.textContent = name;
  card.append(image, title);
  gridEl.appendChild(card);
}
