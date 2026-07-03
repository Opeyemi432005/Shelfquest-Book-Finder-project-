<!-- <script>
  const BOOKS = {
    b01: {
      title: "The Marrow Atlas",
      author: "Foster Lindqvist",
      genre: "Sci-Fi",
      pages: 376,
      published: 2022,
      rating: "★★★★☆",
      ratingNum: "4.6",
      gradient: "from-emerald-900 via-emerald-800 to-teal-600",
      description: "A field surgeon assigned to a long-haul colony ship starts mapping a patient's body that keeps generating organs with no known function — and no known limit."
    },
    b02: {
      title: "Paper Tide",
      author: "Selin Marchetti",
      genre: "Mystery",
      pages: 302,
      published: 2021,
      rating: "★★★☆☆",
      ratingNum: "3.5",
      gradient: "from-amber-900 via-amber-800 to-orange-600",
      description: "A small-town librarian starts receiving overdue notices for books that were never checked out, returned by no one, about events that haven't happened yet."
    },
    b03: {
      title: "The Glass Apiary",
      author: "Wren Castellan",
      genre: "Fantasy",
      pages: 392,
      published: 2023,
      rating: "★★★★☆",
      ratingNum: "4.0",
      gradient: "from-purple-900 via-purple-800 to-fuchsia-600",
      description: "When a reclusive beekeeper's hives begin producing combs of glass instead of honey, the village's fortunes start changing with them — and so does the beekeeper."
    },
    b04: {
      title: "Nine Days of Frost",
      author: "Calla Vesik",
      genre: "Thriller",
      pages: 318,
      published: 2020,
      rating: "★★★★☆",
      ratingNum: "4.5",
      gradient: "from-slate-800 via-slate-700 to-red-700",
      description: "A detective is given nine days — the legal window before a cold case closes for good — to prove a decade-old disappearance was never an accident."
    },
    b05: {
      title: "The Cartographer's Oath",
      author: "Mira Solenne",
      genre: "Fantasy, Adventure",
      pages: 412,
      published: 2021,
      rating: "★★★★★",
      ratingNum: "4.8",
      gradient: "from-indigo-900 via-indigo-800 to-violet-700",
      description: "A mapmaker discovers that the borders on her oldest charts shift whenever no one is watching, leading her into a guild of cartographers who quietly redraw the world to keep it from tearing apart."
    },
    b06: {
      title: "Static Bloom",
      author: "Idris Achebe",
      genre: "Sci-Fi",
      pages: 328,
      published: 2023,
      rating: "★★★★☆",
      ratingNum: "4.0",
      gradient: "from-cyan-900 via-cyan-800 to-teal-600",
      description: "On an abandoned signal relay drifting past Jupiter, a lone gardener keeps the station's last greenhouse alive — until a garbled transmission suggests Earth never lost contact at all."
    },
    b07: {
      title: "Ferrous Hearts",
      author: "Dalen Okoro",
      genre: "Romance",
      pages: 286,
      published: 2022,
      rating: "★★★☆☆",
      ratingNum: "3.5",
      gradient: "from-rose-900 via-rose-800 to-pink-700",
      description: "After a flood collapses the only bridge connecting two feuding river towns, a stubborn blacksmith and a city engineer are forced to rebuild it together."
    },
    b08: {
      title: "Whistling Fathoms",
      author: "Lior Sand",
      genre: "Adventure",
      pages: 344,
      published: 2021,
      rating: "★★★★☆",
      ratingNum: "4.5",
      gradient: "from-sky-900 via-sky-800 to-cyan-700",
      description: "A deep-water diver chasing an insurance bounty starts hearing a low, rhythmic whistle at depths no current should carry sound — and the company that hired her knows exactly what it is."
    },
  };
</script> -->

<!-- <script>
  const overlay   = document.getElementById('modalOverlay');
  const modalCover= document.getElementById('modalCover');

  function openModal(bookId) {
    const b = BOOKS[bookId];
    if (!b) return;

    document.getElementById('modalTitle').textContent     = b.title;
    document.getElementById('modalRating').innerHTML      = `${b.rating} <span class="text-slate-500">${b.ratingNum}</span>`;
    document.getElementById('modalDesc').textContent      = b.description;
    document.getElementById('modalAuthor').textContent    = b.author;
    document.getElementById('modalGenre').textContent     = b.genre;
    document.getElementById('modalPages').textContent     = b.pages;
    document.getElementById('modalPublished').textContent = b.published;

    modalCover.className = `aspect-[2/3] rounded-xl bg-gradient-to-br ${b.gradient} flex items-center justify-center mb-4 sm:mb-0`;
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.detailBtn').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.dataset.detail));
  });

  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalCloseBtn').addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
</script> -->
