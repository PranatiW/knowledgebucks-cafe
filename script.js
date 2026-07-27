const menuButton = document.querySelector('.menu-btn');
const navigation = document.querySelector('.nav-links');
if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    menuButton.textContent = navigation.classList.contains('open') ? '✕' : '☰';
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.textContent = '☰';
  }));
}

(function showPageNotice() {
  const page = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();

  let storageKey = '';
  let title = '';
  let paragraphs = [];

  if (page === 'contact.html') {
    storageKey = 'kbContactSecurityNoticeSeen';
    title = 'Security & Access Notice';
    paragraphs = [
      'This is a monitored educational portfolio. Standard access information may be recorded by the hosting platform for security and performance purposes.',
      'Please use the website responsibly. Do not attempt unauthorised access, copying or misuse of private content.'
    ];
  } else if (page === 'about.html') {
    storageKey = 'kbAboutChannelNoticeSeen';
    title = 'Educational Channels & Responsible Use Notice';
    paragraphs = [
      'This page provides access to official educational and professional channels, including YouTube, WhatsApp and LinkedIn.',
      'These links are shared only for learning, academic interaction and professional communication. Misuse, impersonation, unauthorised copying, redistribution, harassment or inappropriate communication may be treated as academic or professional misconduct.',
      'Please access every channel responsibly and respectfully.'
    ];
  } else {
    return;
  }

  if (sessionStorage.getItem(storageKey)) return;

  const overlay = document.createElement('div');
  overlay.className = 'security-notice-overlay';
  overlay.innerHTML = `
    <div class="security-notice" role="dialog" aria-modal="true" aria-labelledby="securityTitle">
      <div class="security-shield">🛡️</div>
      <h2 id="securityTitle">${title}</h2>
      ${paragraphs.map((text, index) => `<p${index ? ' class="security-small"' : ''}>${text}</p>`).join('')}
      <button type="button" class="btn primary security-accept">I Understand</button>
    </div>`;
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';

  const closeNotice = () => {
    sessionStorage.setItem(storageKey, 'true');
    overlay.classList.add('closing');
    document.body.style.overflow = '';
    setTimeout(() => overlay.remove(), 220);
  };

  overlay.querySelector('.security-accept').addEventListener('click', closeNotice);
})();
