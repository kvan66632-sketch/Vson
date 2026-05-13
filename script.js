// Script để bật/tắt theme và điều hướng mượt
const themeToggle = document.getElementById('themeToggle');

const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
  document.documentElement.setAttribute('data-theme', 'light');
  themeToggle.textContent = 'Light';
}

themeToggle.addEventListener('click', () => {
  const activeTheme = document.documentElement.getAttribute('data-theme');
  const nextTheme = activeTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', nextTheme);
  localStorage.setItem('theme', nextTheme);
  themeToggle.textContent = nextTheme === 'light' ? 'Light' : 'Dark';
});

// Scroll reveal cho các section khi người dùng cuộn
const observerOptions = {
  threshold: 0.15,
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

const sections = document.querySelectorAll('.section-fade');
sections.forEach((section) => revealObserver.observe(section));

// Smooth scrolling cho liên kết bên trong trang
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    if (targetId.length > 1) {
      const target = document.querySelector(targetId);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});
