// Checkpoint B — your behaviour. Build it to checkpoint-b/spec.md.
//
// The data is given to you:
import { items } from "./items.js";

// Export renderItems(list), matching() and start(), as the spec describes.
// Nothing is started for you. Everything you need is in modules 00 to 13.

/**
 * Draws the given items into the list, replacing existing items.
 * @param {Array} list
 */
export function renderItems(list) {
  const element = document.querySelector("#list");
  element.replaceChildren();

  list.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("product");
    li.textContent = item.name;
    element.append(li);
  });
}

/**
 * Returns only items in the electronics category.
 * @returns {Array}
 */
export function matching() {
  return items.filter((item) => item.category === "electronics");
}

/**
 * Draws all items and filters to electronics when the button is clicked.
 */
export function start() {
  renderItems(items);

  document.querySelector("#apply").addEventListener("click", () => {
    renderItems(matching());
  });
}
