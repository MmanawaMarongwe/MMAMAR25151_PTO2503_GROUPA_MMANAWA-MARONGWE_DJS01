// accepts the container; controls it internally
export function modalState(modalContainer) {
  return {
    openModal(modalContent) {
      modalContainer.innerHTML = "";
      modalContainer.appendChild(modalContent);
      modalContainer.style.display = "block";
    },
    closeModal() {
      modalContainer.style.display = "none";
      modalContainer.innerHTML = "";
    },
  };
}
