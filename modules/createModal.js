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
    <div>
        <div>
          <img src="${cover}" alt="${name} cover" class="modal-image" />
        </div>
        <div> 
            <h3>Description</h3>
            <p>${description}</p>
            <h3>Genres</h3>
            <div class="genre-tags">
                ${genreTags
                  .map((genre) => `<span class="tag">${genre}</span>`)
                  .join("")}
            </div>
            <p>${lastUpdate}</p>
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
