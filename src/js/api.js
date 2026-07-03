const API_KEY = "YOUR_API_KEY";
const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

function mapBook(book) {
  const info = book.volumeInfo;

  return {
    id: book.id,
    title: info.title || "No title available",
    authors: info.authors || ["Unknown Author"],
    thumbnail:
      info.imageLinks?.thumbnail ||
      "https://via.placeholder.com/128x192?text=No+Image",
    description: info.description || "No description available.",
    publishedDate: info.publishedDate || "Unknown",
    averageRating: info.averageRating || 0,
    pageCount: info.pageCount || 0,
    publisher: info.publisher || "Unknown Publisher",
  };
}
export async function searchBooks(query) {
  try {
    // Prevent unnecessary API calls
    if (!query.trim()) {
      return [];
    }

    const response = await fetch(
      `${BASE_URL}?q=${encodeURIComponent(query)}&key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    return (data.items || []).map(mapBook);

  } catch (error) {
    console.error("Error searching books:", error);
    return [];
  }
}

export async function getBookById(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}?key=${API_KEY}`);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const book = await response.json();

    return mapBook(book);

  } catch (error) {
    console.error("Error fetching book:", error);
    return null;
  }
}