export function createModal({
  name,
  cover,
  description,
  genreTags = [],
  lastUpdate,
  seasonsInfo = [],
}) {
  const modal = document.createElement("div");
  modal.className = "modal";
  const seasonsHTML = seasonsInfo
    .map(({ title, episodes }, i) => {
      const sTitle = title || `Season ${i + 1}`;
      const ep = Number(episodes) ?? 0;
      return `
        <div class="season">
          <div class="season-row">
            <strong class="season-title">${sTitle}</strong>
            <span class="text-muted">${ep} episode${ep === 1 ? "" : "s"}</span>
          </div>
        </div>
      `;
    })
    .join("");

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
        <div>
            <h2>Seasons</h2>
            <div>
              ${seasonsHTML}
            </div>
        </div>
        
    </div> 
       
    `;

  return modal;
}
/*  */
