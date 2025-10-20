const gDropdown = document.getElementById("genre-options");

export function createGenreOpt(genre) {
  const option = document.createElement("option");
  option.className = "genreName";
  option.textContent = genre.title;
  gDropdown.appendChild(option);
  return option;
}
