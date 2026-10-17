
/**
 * The text of the page's main heading.
 * pageHeading() -> "My Campus Store"
 *
 * @returns {string}
 */
export function pageHeading() {
  return document.querySelector("h1").textContent.trim();
}

/**
 * How many product cards are on the page.
 * productCount() -> 5
 *
 * @returns {number}
 */
export function productCount() {
  return document.querySelectorAll(".card").length;
}

/**
 * The name in every card, in the order they appear.
 *
 * @returns {string[]}
 */
export function productNames() {
  return Array.from(document.querySelectorAll(".card h3")).map(
    (heading) => heading.textContent.trim()
  );
}

/**
 * The price text shown on the card with that name.
 *
 * @param {string} name
 * @returns {string|null}
 */
export function priceOf(name) {
  const cards = Array.from(document.querySelectorAll(".card"));
  const card = cards.find(
    (card) => card.querySelector("h3").textContent.trim() === name
  );

  if (!card) {
    return null;
  }

  return card.querySelector(".price").textContent.trim();
}

/**
 * Returns the names of cards with the class "sold-out".
 *
 * @returns {string[]}
 */
export function soldOutNames() {
  return Array.from(document.querySelectorAll(".card.sold-out")).map(
    (card) => card.querySelector("h3").textContent.trim()
  );
}
