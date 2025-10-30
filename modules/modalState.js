export function modalState(modalContent) {
  const isOpen = false;

  return {
    openModal() {
      modalContainer.innerHTML = "";
      modalContainer.appendChild(modalContent);
      modalContainer.classList = "open";
      isOpen = true;
    },
  };
}
