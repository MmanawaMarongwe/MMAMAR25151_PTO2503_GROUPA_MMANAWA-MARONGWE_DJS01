/**
 * This function creates an o
 * @param {*} genre - The genre of a podcast
 */
export function createOpt(selectEl, value) {
  const option = document.createElement("option");
  option.value = value;
  selectEl.appendChild(option);
}
