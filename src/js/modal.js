 //src/js/modal.js

 const overlay = document.getElementById("modalOverlay");
const modalCover = document.getElementById("modalCover");

/**
 * Opens the modal and fills it with book information.
 * @param {Object} book - Book object returned from api.js
 */
 export function openModal(book) {
   if (!book) return;

   document.getElementById("modalTitle").textContent =
     book.title;

  const rating =
   book.averageRating > 0
     ? `${"⭐".repeat(Math.round(book.averageRating))}
        <span class="text-slate-500">${book.averageRating}</span>`
     : `<span class="text-slate-500">Not rated</span>`;

 document.getElementById("modalRating").innerHTML = rating;

   document.getElementById("modalDesc").textContent =
     book.description;

   document.getElementById("modalAuthor").textContent =
     book.authors.join(", ");

   document.getElementById("modalGenre").textContent =
     "Google Books";

   document.getElementById("modalPages").textContent =
   book.pageCount || "Unknown";

   document.getElementById("modalPublished").textContent =
    book.publishedDate;

   modalCover.innerHTML = `
       <img
           src="${book.thumbnail}"
           alt="${book.title}"
           class="w-full h-full object-cover rounded-xl"
       >
   `;

   overlay.classList.remove("hidden");
   document.body.style.overflow = "hidden";
 }

 /**
  * Closes the modal.
  */
 export function closeModal() {
   overlay.classList.add("hidden");
   document.body.style.overflow = "";
 }

 document
   .getElementById("modalClose")
   .addEventListener("click", closeModal);

 document
   .getElementById("modalCloseBtn")
   .addEventListener("click", closeModal);

 overlay.addEventListener("click", (e) => {
   if (e.target === overlay) {
     closeModal();
   }
 });

 document.addEventListener("keydown", (e) => {
   if (e.key === "Escape") {
     closeModal();
   }
 });