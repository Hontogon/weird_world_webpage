
/* ===============================
   NAV LETTER SPLIT + FLIP EFFECT
================================ */

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('nav a').forEach(link => {
    // Skip current page (leave it as-is)
   

    const text = link.textContent;
    const fantasy = link.getAttribute('data-fantasy') || text;

    link.textContent = '';

    for (let i = 0; i < text.length; i++) {
      const letter = document.createElement('span');

      const front = document.createElement('span');
      front.className = 'front';
      front.textContent = text[i];

      const back = document.createElement('span');
      back.className = 'back';
      back.textContent = fantasy[i] || '';

      letter.appendChild(front);
      letter.appendChild(back);
      link.appendChild(letter);
    }
  });
});


/* ===============================
   PAGE TRANSITION ANIMATIONS
================================ */

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    const current = document.querySelector('nav a.current');
    if (!current) return;

    const currentIndex = Number(current.dataset.index);
    const targetIndex = Number(link.dataset.index);

    // If clicking the same page, do nothing
    if (currentIndex === targetIndex) {
      e.preventDefault();
      return;
    }

    e.preventDefault();

    const direction = targetIndex > currentIndex ? 'right' : 'left';
    const href = link.getAttribute('href');

    document.body.classList.add(`page-leave-${direction}`);

    requestAnimationFrame(() => {
      document.body.classList.add(`page-leave-${direction}-active`);
    });

    setTimeout(() => {
      window.location = href;
    }, 500);
  });
});