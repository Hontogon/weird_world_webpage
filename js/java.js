
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('nav a').forEach(link => {
    const text = link.textContent;
    const fantasy = link.getAttribute('data-fantasy') || text;

    link.textContent = '';

    for (let i = 0; i < text.length; i += 1) {
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

  const hero = document.querySelector('.hero_text');

  if (hero) {
    const text = hero.textContent;
    const fantasy = '𓂀𓆣𓋹𓃭𓂀𓏏';

    hero.textContent = '';

    for (let i = 0; i < text.length; i += 1) {
      const letter = document.createElement('span');

      const front = document.createElement('span');
      front.className = 'front';
      front.textContent = text[i];

      const back = document.createElement('span');
      back.className = 'back';
      back.textContent = fantasy[i] || text[i];

      letter.appendChild(front);
      letter.appendChild(back);
      hero.appendChild(letter);
    }
  }

  const menuToggle = document.querySelector('.menu-toggle');
  const navElement = document.querySelector('nav');

  if (menuToggle && navElement) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navElement.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', event => {
    const current = document.querySelector('nav a.current');
    if (!current) return;

    const currentIndex = Number(current.dataset.index);
    const targetIndex = Number(link.dataset.index);

    if (currentIndex === targetIndex) {
      event.preventDefault();
      return;
    }

    event.preventDefault();

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
