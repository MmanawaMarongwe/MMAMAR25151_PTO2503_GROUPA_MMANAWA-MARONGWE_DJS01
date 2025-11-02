// modules/showModal.js
import { createModal } from "./createModal.js";
import { modalState } from "./modalState.js";

export function renderModal(pod, modalContainer) {
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

  // Close on overlay click
  modalContainer.addEventListener("click", (e) => {
    if (e.target === modalContainer) closeModal();
  });

  // Close on button click
  modal.querySelector(".modal-close").addEventListener("click", (e) => {
    e.stopPropagation();
    closeModal();
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}
