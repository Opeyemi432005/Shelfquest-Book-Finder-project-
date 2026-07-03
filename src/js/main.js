import { searchBooks } from "./api.js";
import { openModal } from "./modal.js";

const searchInput = document.getElementById("searchInput");
const resultsGrid = document.getElementById("grid");
const resultCount = document.getElementById("resultCount");

const loadingState = document.getElementById("loadingState");
const emptyState = document.getElementById("emptyState");
const errorState = document.getElementById("errorState");

let currentBooks = [];

function showState(state) {
  loadingState.classList.add("hidden");
  emptyState.classList.add("hidden");
  errorState.classList.add("hidden");

  if (state === "loading") {
    loadingState.classList.remove("hidden");
  }

  if (state === "empty") {
    emptyState.classList.remove("hidden");
  }

  if (state === "error") {
    errorState.classList.remove("hidden");
  }
}

function renderBooks(books) {
  currentBooks = books;

  resultsGrid.innerHTML = "";

  resultCount.textContent = `${books.length} book${books.length !== 1 ? "s" : ""} found`;

  books.forEach((book) => {
    const card = document.createElement("article");

    card.className =
      "group bg-card border border-edge/80 rounded-xl overflow-hidden flex flex-col hover:border-brand/40 transition-colors";

    card.innerHTML = `
      <div class="relative aspect-[2/3]">
        <img
          src="${book.thumbnail}"
          alt="${book.title}"
          class="w-full h-full object-cover"
        >

        <button
          class="detailBtn absolute bottom-2 left-2 right-2 rounded-lg bg-brand text-white text-xs font-semibold py-2">
          View Details
        </button>
      </div>

      <div class="p-3 flex flex-col flex-1">
        <h4 class="font-display text-sm font-semibold line-clamp-2 mb-1">
          ${book.title}
        </h4>

        <p class="text-xs text-slate-400 mb-1">
          ${book.authors.join(", ")}
        </p>

        <p class="text-amber-400 text-xs mb-2">
          ⭐ ${book.averageRating || "N/A"}
        </p>
      </div>
    `;

    card.querySelector(".detailBtn").addEventListener("click", () => {
      openModal(book);
    });

    resultsGrid.appendChild(card);
  });
}

async function performSearch(query) {
  if (!query.trim()) {
    resultsGrid.innerHTML = "";
    resultCount.textContent = "0 books found";
    showState();
    return;
  }

  try {
    showState("loading");

    const books = await searchBooks(query);

    showState();

    if (books.length === 0) {
      showState("empty");
      return;
    }

    renderBooks(books);

  } catch (error) {
    console.error(error);
    showState("error");
  }
}

let searchTimeout;

searchInput.addEventListener("input", (event) => {
  clearTimeout(searchTimeout);

  searchTimeout = setTimeout(() => {
    performSearch(event.target.value);
  }, 500);
});