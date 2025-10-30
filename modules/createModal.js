export function createModal({
  name,
  cover,
  description,
  genreTags = [],
  lastUpdate,
}) {
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `<h2>${name}</h2>
    <div class = "podcast-info">
        <div class = "image-grid">
          <img src="${cover}" alt="${name} cover" class="modal-image" />
        </div>
        <div class="info-grid"> 
            <h3>Description</h3>
            <p class="text-muted">${description}</p>
            <h3>Genres</h3>
            <div class="genre-tags">
                ${genreTags
                  .map((genre) => `<span class="tag">${genre}</span>`)
                  .join("")}
            </div>
            <p class="text-muted">Last updated ${lastUpdate}</p>
        </div>
    </div> 
    <div>
       
    `;

  return modal;
}
/*<h1>Seasons</h1>
            <div>${seasonsInfo
              .map((season) => `<div class="season"> ${season}</div>`)
              .join("")}</div>
    </div>*/
