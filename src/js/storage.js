const STORAGE_KEY = "shelfquest-favorites";

/**
 * Get all favorite books.
 */
export function getFavorites() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

/**
 * Save favorites.
 */
function saveFavorites(favorites) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
}

/**
 * Check if a book is already a favorite.
 */
export function isFavorite(bookId) {
  return getFavorites().some((book) => book.id === bookId);
}

/**
 * Add a favorite.
 */
export function addFavorite(book) {
  const favorites = getFavorites();

  if (!isFavorite(book.id)) {
    favorites.push(book);
    saveFavorites(favorites);
  }
}

/**
 * Remove a favorite.
 */
export function removeFavorite(bookId) {
  const favorites = getFavorites().filter(
    (book) => book.id !== bookId
  );

  saveFavorites(favorites);
}

/**
 * Toggle favorite.
 */
export function toggleFavorite(book) {
  if (isFavorite(book.id)) {
    removeFavorite(book.id);
  } else {
    addFavorite(book);
  }
}