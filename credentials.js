// credentials.js - Credentials & certifications, grouped by category
// To add a new credential: push an object onto CREDENTIALS_DATA below. New categories are
// picked up automatically and appended after the ones listed in CATEGORY_ORDER.

const CATEGORY_ORDER = ["Cybersecurity", "Networking", "Hands-On Practice"];

const CREDENTIALS_DATA = [
  {
    id: "cisco-jr-cyber-analyst",
    type: "badge",
    title: "Junior Cybersecurity Analyst Career Path",
    issuer: "Cisco",
    date: "Jun 2026",
    category: "Cybersecurity",
    image: "https://images.credly.com/images/441578ec-c0f3-46cc-95fc-86b27e90cf4f/image.png",
    url: "https://www.credly.com/badges/6f2cc0b5-8833-4fcd-ad7f-cf087b9b38b8"
  },
  {
    id: "cisco-cyber-threat-mgmt",
    type: "badge",
    title: "Cyber Threat Management",
    issuer: "Cisco",
    date: "Jun 2026",
    category: "Cybersecurity",
    image: "https://images.credly.com/images/5d5ac32b-d239-42b8-9665-8a921dc3ab47/image.png",
    url: "https://www.credly.com/badges/554e6d8b-82e1-4ca9-ab46-e365bd4ca6ca"
  },
  {
    id: "cisco-network-defense",
    type: "badge",
    title: "Network Defense",
    issuer: "Cisco",
    date: "Jun 2026",
    category: "Cybersecurity",
    image: "https://images.credly.com/images/51526f76-711b-4caf-b04d-27f89512b112/NetworkDefense_v1_091721.png",
    url: "https://www.credly.com/badges/4663d851-b335-4fb4-9dea-f635f74a168e"
  },
  {
    id: "cisco-endpoint-security",
    type: "badge",
    title: "Endpoint Security",
    issuer: "Cisco",
    date: "Jun 2026",
    category: "Cybersecurity",
    image: "https://images.credly.com/images/0ca5f542-fb5e-4a22-9b7a-c1a1ce4c3db7/EndpointSecurity.png",
    url: "https://www.credly.com/badges/ef9eb3d2-dd8c-479d-a783-dca1cb49de20"
  },
  {
    id: "cisco-intro-cybersecurity",
    type: "badge",
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    date: "Jun 2026",
    category: "Cybersecurity",
    image: "https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png",
    url: "https://www.credly.com/badges/c077f312-b099-4e1c-8fa0-bd9b9858cf6a"
  },
  {
    id: "cisco-networking-basics",
    type: "badge",
    title: "Networking Basics",
    issuer: "Cisco",
    date: "Jun 2026",
    category: "Networking",
    image: "https://images.credly.com/images/5bdd6a39-3e03-4444-9510-ecff80c9ce79/image.png",
    url: "https://www.credly.com/badges/670a5116-fc99-4e06-b676-a9e3ede8ae3d"
  },
  {
    id: "cisco-networking-devices",
    type: "badge",
    title: "Networking Devices & Initial Config",
    issuer: "Cisco",
    date: "Jun 2026",
    category: "Networking",
    image: "https://images.credly.com/images/88316fe8-5651-4e61-a6be-5be1558f049e/image.png",
    url: "https://www.credly.com/badges/d60fdce4-bca0-400c-847b-feb0b8f3260b"
  },
  {
    id: "cyberhack-2026",
    type: "certificate",
    title: "CyberHack 2026 — CSE Connect Hackathon Participant",
    issuer: "CSE Connect",
    date: "2026",
    category: "Hands-On Practice",
    image: "assets/HACKATHONCERT.png",
    url: "assets/HACKATHONCERT.png"
  },
  {
    id: "tryhackme-profile",
    type: "profile",
    title: "TryHackMe Profile",
    issuer: "TryHackMe",
    date: null,
    category: "Hands-On Practice",
    image: null,
    url: "https://tryhackme.com/p/JohnCallaghan",
    badgeApi: "https://tryhackme.com/api/v2/badges/public-profile?userPublicId=5535942"
  }
];

function escapeHtml(str) {
  return String(str).replace(/[&<>]/g, function (m) {
    if (m === '&') return '&amp;';
    if (m === '<') return '&lt;';
    if (m === '>') return '&gt;';
    return m;
  });
}

function badgeCardHtml(c) {
  const dateLabel = c.date ? `, ${escapeHtml(c.date)}` : '';
  return `
    <a class="badge-card"
       href="${c.url}" target="_blank" rel="noopener noreferrer"
       aria-label="${escapeHtml(c.title)} — ${escapeHtml(c.issuer)}${dateLabel} (opens Credly)">
      <img src="${c.image}" alt="${escapeHtml(c.title)} badge" width="80" height="80" loading="lazy" decoding="async" />
      <span class="badge-name">${escapeHtml(c.title)}</span>
      <span class="badge-issuer">${escapeHtml(c.issuer)}</span>
      ${c.date ? `<span class="badge-date">${escapeHtml(c.date)}</span>` : ''}
      <span class="badge-verified">Verified &middot; Credly</span>
    </a>`;
}

function certificateCardHtml(c) {
  return `
    <figure class="cert-thumb">
      <a href="${c.url}" target="_blank" rel="noopener noreferrer">
        <img src="${c.image}" alt="${escapeHtml(c.title)} certificate" loading="lazy" />
      </a>
      <figcaption>
        ${escapeHtml(c.title)}
        <a href="${c.url}" target="_blank" rel="noopener noreferrer" class="cert-thumb-link">View full certificate &rarr;</a>
      </figcaption>
    </figure>`;
}

function profileCardHtml(c) {
  return `
    <div class="cred-profile-card">
      <iframe
        data-src="${c.badgeApi}"
        title="${escapeHtml(c.title)}"
        loading="lazy"
        style="border:none; width:100%; max-width:400px; height:120px;">
      </iframe>
      <a href="${c.url}" target="_blank" rel="noopener noreferrer" class="cert-thumb-link">View live profile &rarr;</a>
    </div>`;
}

function featureCardHtml(c) {
  return c.type === 'certificate' ? certificateCardHtml(c) : profileCardHtml(c);
}

function renderCredentials() {
  const container = document.getElementById('credentialsContainer');
  if (!container) return;

  const byCategory = {};
  CREDENTIALS_DATA.forEach(c => {
    (byCategory[c.category] = byCategory[c.category] || []).push(c);
  });

  const categories = [
    ...CATEGORY_ORDER.filter(cat => byCategory[cat]),
    ...Object.keys(byCategory).filter(cat => !CATEGORY_ORDER.includes(cat)).sort()
  ];

  container.innerHTML = categories.map(cat => {
    const items    = byCategory[cat];
    const badges   = items.filter(c => c.type === 'badge');
    const features = items.filter(c => c.type !== 'badge');

    return `
      <section class="credential-group">
        <div class="credential-group-header">
          <h2>${escapeHtml(cat)}</h2>
          <span class="credential-group-count">${items.length}</span>
        </div>
        ${features.length ? `<div class="credential-features">${features.map(featureCardHtml).join('')}</div>` : ''}
        ${badges.length ? `<div class="badge-grid" aria-label="${escapeHtml(cat)} certifications">${badges.map(badgeCardHtml).join('')}</div>` : ''}
      </section>`;
  }).join('');

  /* Lazy-load TryHackMe iframes once their card nears the viewport */
  document.querySelectorAll('.cred-profile-card iframe[data-src]').forEach(iframe => {
    new IntersectionObserver((entries, obs) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.src = e.target.dataset.src; obs.unobserve(e.target); }
      });
    }, { rootMargin: '300px' }).observe(iframe);
  });
}

renderCredentials();

/* ── Mobile nav ─────────────────────────────────────────── */
const hamburger    = document.getElementById('hamburger');
const mainNavLinks = document.getElementById('mainNavLinks');
if (hamburger && mainNavLinks) {
  hamburger.addEventListener('click', () => mainNavLinks.classList.toggle('open'));
}
