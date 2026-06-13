// projects.js - Complete project data with auto-generated placeholders

const PROJECTS_DATA = [
  // ========== AI & ML ==========
  {
    id: "odia-ocr",
    title: "Deep Learning for OCR (Odia Script)",
    category: "AI & ML",
    image: "assets/OCRODIA.png",
    shortDesc: "CNN + transfer learning for low‑resource Odia script – 84% test accuracy.",
    fullDesc: `<p>Dissertation project building a high‑accuracy OCR system for the Odia script. Due to severe data scarcity, a CNN with transfer learning from a Bengali model was used. A custom GUI augmented the dataset, boosting final accuracy to <strong>84.0%</strong>.</p>`,
    technologies: ["Python", "TensorFlow", "Keras", "Tkinter", "Deep Learning"],
    github: "https://github.com/John-W-Callaghan/OCRODIA",
    reportPDF: "assets/ocrodia.pdf"
  },
  {
    id: "chatbot",
    title: "Intelligent Chatbot for Train Services",
    category: "AI & ML",
    image: "assets/train.png",
    shortDesc: "Conversational AI + delay prediction (Random Forest MAE: 0.34 min).",
    fullDesc: `<p>A chatbot that scrapes National Rail for cheap tickets and predicts train delays. The Random Forest model achieved a Mean Absolute Error of <strong>0.34 minutes</strong>.</p>`,
    technologies: ["Python", "Scikit-learn", "Selenium", "spaCy", "SQLite"],
    github: "https://github.com/BabaRootsMg/AI-CW2-Developing-An-Intelligent-Chatbot-System",
    reportPDF: "assets/chatbottrain.pdf"
  },
  {
    id: "emotion-pred",
    title: "Emotion Prediction from Text",
    category: "AI & ML",
    image: "assets/emotionpred.png",
    shortDesc: "Logistic regression + Tkinter GUI for real‑time emotion detection.",
    fullDesc: `<p>NLP pipeline using CountVectorizer and logistic regression, wrapped in an interactive Tkinter GUI that predicts emotion as you type.</p>`,
    technologies: ["Python", "Scikit-learn", "NLTK", "Tkinter"],
    github: "https://github.com/John-W-Callaghan/Emotions_predictor"
  },
  {
    id: "search-engine",
    title: "Video Game Search Engine",
    category: "AI & ML",
    image: "assets/gamesearch engine.png",
    shortDesc: "TF‑IDF, WordNet query expansion, cosine similarity ranking.",
    fullDesc: `<p>Custom search engine over HTML game data using BeautifulSoup, NLTK WordNet, and Scikit‑learn's TfidfVectorizer.</p>`,
    technologies: ["Python", "Scikit-learn", "BeautifulSoup", "NLTK"],
    github: "https://github.com/John-W-Callaghan/Videogame-Search-engine"
  },

  // ========== Web & Security ==========
  {
    id: "secure-blog",
    title: "Secure Web-Based Blog",
    category: "Web & Security",
    image: "assets/securewebbased.png",
    shortDesc: "Node.js + PostgreSQL blog with SQLi, XSS, CSRF protection.",
    fullDesc: `<p>Full‑stack blog with defensive mitigations against OWASP Top 5: SQL injection, XSS, CSRF, session hijacking, and account enumeration.</p>`,
    technologies: ["Node.js", "PostgreSQL", "JavaScript", "Cybersecurity"],
    github: "https://github.com/BabaRootsMg/DSS-UG-002"
  },
  {
    id: "parking-system",
    title: "Parking Management System",
    category: "Web & Security",
    image: "assets/pARKINGSYSTEM.png",
    shortDesc: "Full‑stack booking with Docker, Node.js, PostgreSQL.",
    fullDesc: `<p>A full-stack parking booking system allowing users to reserve spaces in advance. Built with Node.js, PostgreSQL, Docker, and Pug templating.</p>`,
    technologies: ["Node.js", "PostgreSQL", "Docker", "JavaScript", "Pug"],
    github: "https://github.com/Anthony-de-cruz/Parking-Management-System"
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    category: "Web & Security",
    image: "assets/website.png",
    shortDesc: "Responsive personal site with particle animations.",
    fullDesc: `<p>Custom portfolio built from scratch with smooth UI, particle background, and full responsiveness.</p>`,
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/John-W-Callaghan/Portfolio"
  },
  {
    id: "pihole",
    title: "Network-Level Ad Blocker (Pi-hole)",
    category: "Web & Security",
    image: null,  // Auto-generated placeholder
    shortDesc: "Self‑hosted DNS sinkhole blocking ads across entire home network.",
    fullDesc: `<p>Deployed a Raspberry Pi running Pi-hole as a network-wide DNS sinkhole. Configured static IP via NetworkManager (nmcli), resolved IP conflicts, and configured router to use Pi-hole as primary DNS – blocking thousands of ad/tracker domains across all devices without per-device software.</p>`,
    technologies: ["Raspberry Pi", "Linux", "DNS", "Pi-hole", "NetworkManager", "SSH"],
    github: null,
    reportPDF: "assets/Rasberry_pi.pdf"
  },

  // ========== Data Analysis ==========
  {
    id: "med-viz",
    title: "Medical Data Visualizer",
    category: "Data Analysis",
    image: "assets/codecamp.png",
    shortDesc: "Pandas, seaborn, matplotlib: medical examination plots.",
    fullDesc: `<p>Data preprocessing and visualisation (categorical plots, correlation heatmap) on medical exam data.</p>`,
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/John-W-Callaghan/Data-Analysis-Projects"
  },
  {
    id: "sea-level",
    title: "Sea Level Rise Visualizer",
    category: "Data Analysis",
    image: "assets/codecamp.png",
    shortDesc: "Linear regression forecast to 2050 using SciPy.",
    fullDesc: `<p>Historical sea level data + linear regression to predict future rise up to 2050.</p>`,
    technologies: ["Python", "Pandas", "Matplotlib", "SciPy"],
    github: "https://github.com/John-W-Callaghan/Data-Analysis-Projects"
  },
  {
    id: "page-views",
    title: "Page Views Time Series Analyzer",
    category: "Data Analysis",
    image: "assets/codecamp.png",
    shortDesc: "Line/bar/box plots to visualise forum traffic trends.",
    fullDesc: `<p>Cleaned and visualised forum page view data, identifying seasonality and outliers.</p>`,
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/John-W-Callaghan/Data-Analysis-Projects"
  },
  {
    id: "demo-analysis",
    title: "Demographic Data Analyzer",
    category: "Data Analysis",
    image: "assets/codecamp.png",
    shortDesc: "Pandas analysis of demographic dataset (race, education, income).",
    fullDesc: `<p>Used Pandas to load a CSV and answer statistical questions about race representation, education levels, and earnings.</p>`,
    technologies: ["Python", "Pandas", "NumPy"],
    github: "https://github.com/John-W-Callaghan/Data-Analysis-Projects"
  },
  {
    id: "mean-variance",
    title: "Mean‑Variance‑Standard Deviation Calculator",
    category: "Data Analysis",
    image: "assets/codecamp.png",
    shortDesc: "NumPy statistical analysis for a 3×3 matrix.",
    fullDesc: `<p>Takes a list of 9 numbers, converts to a 3×3 NumPy array, and returns mean, variance, standard deviation, max, min, and sum along rows, columns, and flattened matrix.</p>`,
    technologies: ["Python", "NumPy"],
    github: "https://github.com/John-W-Callaghan/Data-Analysis-Projects"
  },

  // ========== Python / Game Development ==========
  {
    id: "mud-game",
    title: "MUD Game – Multi-User Dungeon",
    category: "Python",
    image: null,
    shortDesc: "Command-line adventure game with character creation, save/load, and unit testing.",
    fullDesc: `<p>A command-line MUD (Multi-User Dungeon) game built in Python. Features include character customisation, location exploration, inventory management, save/load to JSON, exception handling, and unit testing.</p>`,
    technologies: ["Python", "OOP", "Unit Testing", "JSON", "Game Development"],
    github: "https://github.com/simonrawks/ap-assessment2-game",
    reportPDF: null
  },
  {
    id: "networks-cw",
    title: "Networks Programming Assignment",
    category: "Python",
    image: null,
    shortDesc: "Python networking game with client-server architecture.",
    fullDesc: `<p>A networked multiplayer game implementing client-server communication, game state synchronisation, and custom protocol design using Python sockets.</p>`,
    technologies: ["Python", "Networking", "Sockets", "Client-Server"],
    github: "https://github.com/John-W-Callaghan/NetworksCW",
    reportPDF: "assets/networks_cw_report.pdf"
  },

  // ========== Scientific Computing ==========
  {
    id: "arithmetic",
    title: "Arithmetic Formatter",
    category: "Python",
    image: "assets/codecamp.png",
    shortDesc: "Formats arithmetic problems vertically and side‑by‑side.",
    fullDesc: `<p>A Python function that neatly formats multiple arithmetic problems in a visually appealing layout, with robust error handling.</p>`,
    technologies: ["Python", "String Manipulation"],
    github: "https://github.com/John-W-Callaghan/Scientific-Computing-Projects"
  },
  {
    id: "time-calc",
    title: "Time Calculator",
    category: "Python",
    image: "assets/codecamp.png",
    shortDesc: "Add duration to start time, handle AM/PM and weekday changes.",
    fullDesc: `<p>Adds a given duration to a start time, correctly managing AM/PM transitions and day‑of‑week changes.</p>`,
    technologies: ["Python"],
    github: "https://github.com/John-W-Callaghan/Scientific-Computing-Projects"
  },
  {
    id: "budget-app",
    title: "Budget App",
    category: "Python",
    image: "assets/codecamp.png",
    shortDesc: "Object‑oriented budget manager with spending charts.",
    fullDesc: `<p>OOP app for managing budgets across categories. Supports deposits, withdrawals, transfers, and a text‑based bar chart visualisation.</p>`,
    technologies: ["Python", "OOP"],
    github: "https://github.com/John-W-Callaghan/Scientific-Computing-Projects"
  },
  {
    id: "poly-calc",
    title: "Polygon Area Calculator",
    category: "Python",
    image: "assets/codecamp.png",
    shortDesc: "Rectangle & Square classes demonstrating inheritance.",
    fullDesc: `<p>Uses a Rectangle class and an inherited Square class to calculate area, perimeter, and diagonal – showing key OOP principles.</p>`,
    technologies: ["Python", "OOP", "Geometry"],
    github: "https://github.com/John-W-Callaghan/Scientific-Computing-Projects"
  },

  // ========== Hackathon ==========
  {
    id: "cve-translator",
    title: "CVE-to-My-Stack Translator",
    category: "Hackathon",
    image: "assets/HACKATHONCERT.png",
    shortDesc: "CyberHack 2026 — filters NVD CVEs to only the vulnerabilities that actually affect your asset list.",
    fullDesc: `<p>Built at <strong>CyberHack 2026 — CSE Connect Hackathon</strong>. With hundreds of new CVEs published daily, the vast majority don't affect any given organisation. This tool solves that noise problem: input your asset list and it cross-references against the <strong>National Vulnerability Database (NVD)</strong>, then enriches every match with <strong>EPSS exploitation probability scores</strong> and <strong>CISA Known Exploited Vulnerabilities (KEV)</strong> flags. Output is a prioritised CSV ranked by real-world threat urgency.</p>
    <p><strong>Pipeline:</strong> Four modular stages — <code>normalisation.py</code> (product name → CPE mapping via fuzzy matching), <code>matcher.py</code> (CVE lookup &amp; enrichment), <code>ranker.py</code> (CSV generation), and <code>test_pipeline.py</code> (51 unit tests).</p>
    <p><strong>Data sources:</strong> NVD CVE records · EPSS scores · CISA KEV catalog · CPE Dictionary</p>`,
    technologies: ["Python", "NVD API", "EPSS", "CISA KEV", "rapidfuzz", "Cybersecurity"],
    github: "https://github.com/John-W-Callaghan/Hackathon-2026"
  },

  // ========== Academic & Security Research ==========
  {
    id: "mnist",
    title: "MNIST Classifier Analysis",
    category: "Academic",
    image: "assets/mnist.png",
    shortDesc: "RF, K‑NN, SVM comparison with cross-validation and tuning.",
    fullDesc: `<p>Evaluated three supervised learning algorithms (Random Forest, K‑NN, SVM) on the MNIST dataset using 5‑fold cross-validation and hyperparameter tuning.</p>`,
    technologies: ["Python", "Scikit-learn", "Random Forest", "K-NN", "SVM"],
    reportPDF: "assets/classifiers.pdf"
  },
  {
    id: "cyber-report",
    title: "Cybersecurity Policies Report",
    category: "Academic",
    image: "assets/Policys.png",
    shortDesc: "Research on security policies, frameworks, and compliance.",
    fullDesc: `<p>Formal report exploring why security policies are essential for defending against threats, ensuring compliance, and guiding employees.</p>`,
    technologies: ["Research", "Technical Writing", "Cybersecurity"],
    reportPDF: "assets/cyber.pdf"
  },
  {
    id: "network-packet-tracer",
    title: "Network Security Design (Cisco Packet Tracer)",
    category: "Academic",
    image: null,
    shortDesc: "ACLs, IPSec VPN, SSL/TLS handshake analysis.",
    fullDesc: `<p>Designed and analysed secure networks using Cisco Packet Tracer. Implemented Standard/Extended ACLs, IPSec VPN tunnels with cryptographic security associations, and analysed SSL/TLS handshakes and cipher suites.</p>`,
    technologies: ["Cisco Packet Tracer", "ACL", "IPSec VPN", "SSL/TLS", "Packet Analysis"],
    github: null,
    reportPDF: "assets/Networks.pdf"
  },
  {
    id: "ai-ids",
    title: "AI-Based Intrusion Detection Systems & Their Vulnerabilities",
    category: "Academic",
    image: "assets/Policys.png",
    shortDesc: "Literature review on AI-driven NIDS and adversarial ML attacks.",
    fullDesc: `<p>Critical literature review examining supervised/unsupervised learning for intrusion detection, adversarial vulnerabilities (evasion and poisoning attacks), and defensive strategies including adversarial training and explainable AI. References 19 academic sources.</p>`,
    technologies: ["Machine Learning", "NIDS", "Adversarial ML", "Explainable AI", "Cybersecurity"],
    github: null,
    reportPDF: "assets/Proffesional.pdf"
  },
  {
    id: "blockchain-evoting",
    title: "Blockchain + AI for Secure E-Voting",
    category: "Academic",
    image: null,
    shortDesc: "Hybrid framework combining blockchain integrity with AI behavioural analysis.",
    fullDesc: `<p>A hybrid framework for secure e-voting simulation using blockchain (immutable ledger, smart contracts) and AI-driven behavioural analysis (anomaly detection for vote manipulation).</p>`,
    technologies: ["Blockchain", "AI/ML", "Smart Contracts", "Anomaly Detection", "Cryptography"],
    github: "https://github.com/John-W-Callaghan/NetworksCW",
    reportPDF: "assets/Networks and IOT.pdf"
  }
];

// ========== AUTO-GENERATE PLACEHOLDER IMAGES ==========
function generatePlaceholder(project) {
  const catConfig = {
    "AI & ML":        { label: "// ai & machine learning", shape: "nodes"    },
    "Web & Security": { label: "// web & security",        shape: "shield"   },
    "Data Analysis":  { label: "// data analysis",         shape: "bars"     },
    "Python":         { label: "// python",                shape: "brackets" },
    "Academic":       { label: "// academic research",     shape: "lines"    },
    "Hackathon":      { label: "// hackathon",             shape: "star"     }
  };

  const cat = catConfig[project.category] || catConfig["Academic"];

  const breakPoint = project.title.lastIndexOf(' ', 30);
  const titleRaw = project.title.length > 30
    ? project.title.slice(0, breakPoint > 0 ? breakPoint : 30) + '…'
    : project.title;
  const titleSvg = escapeHtmlForSvg(titleRaw);

  const tags = project.technologies.slice(0, 3);
  let tagX = 50;
  const tagEls = tags.map(tag => {
    const w = Math.max(50, Math.round(escapeHtmlForSvg(tag).length * 7 + 18));
    const el = `<rect x="${tagX}" y="268" width="${w}" height="20" rx="3" fill="#0D1520" stroke="#1B2C42" stroke-width="1"/>`
             + `<text x="${tagX + w / 2}" y="282" font-family="Courier New,monospace" font-size="10" fill="#4B6680" text-anchor="middle">${escapeHtmlForSvg(tag)}</text>`;
    tagX += w + 8;
    return el;
  }).join('');

  const shapes = {
    nodes:    `<g fill="none" stroke="#1B2C42" stroke-width="2">`
            + `<circle cx="575" cy="150" r="18"/><circle cx="638" cy="100" r="13"/><circle cx="638" cy="200" r="13"/>`
            + `<circle cx="700" cy="72" r="10"/><circle cx="700" cy="150" r="10"/><circle cx="700" cy="228" r="10"/>`
            + `<line x1="592" y1="143" x2="626" y2="109"/><line x1="592" y1="157" x2="626" y2="191"/>`
            + `<line x1="650" y1="95" x2="691" y2="79"/><line x1="650" y1="105" x2="691" y2="144"/>`
            + `<line x1="650" y1="195" x2="691" y2="156"/><line x1="650" y1="205" x2="691" y2="222"/></g>`,

    shield:   `<g fill="none" stroke="#1B2C42" stroke-width="2">`
            + `<path d="M650 82 L698 100 L698 155 C698 178 650 198 650 198 C650 198 602 178 602 155 L602 100 Z"/>`
            + `<path d="M634 148 L647 162 L668 130" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></g>`,

    bars:     `<g fill="#111E32" stroke="#1B2C42" stroke-width="1.5">`
            + `<rect x="560" y="172" width="24" height="78" rx="2"/>`
            + `<rect x="594" y="132" width="24" height="118" rx="2"/>`
            + `<rect x="628" y="105" width="24" height="145" rx="2"/>`
            + `<rect x="662" y="140" width="24" height="110" rx="2"/>`
            + `<rect x="696" y="118" width="24" height="132" rx="2"/></g>`,

    brackets: `<text x="572" y="236" font-family="Courier New,monospace" font-size="112" fill="#14223A" font-weight="700">{}</text>`,

    lines:    `<g fill="#172334">`
            + `<rect x="560" y="92"  width="175" height="11" rx="2"/>`
            + `<rect x="560" y="115" width="148" height="11" rx="2"/>`
            + `<rect x="560" y="138" width="162" height="11" rx="2"/>`
            + `<rect x="560" y="161" width="130" height="11" rx="2"/>`
            + `<rect x="560" y="184" width="155" height="11" rx="2"/>`
            + `<rect x="560" y="207" width="115" height="11" rx="2"/>`
            + `<rect x="560" y="230" width="142" height="11" rx="2"/></g>`,

    star:     `<polygon points="650,82 663,125 710,125 674,152 687,195 650,168 613,195 626,152 590,125 637,125" `
            + `fill="none" stroke="#1B2C42" stroke-width="2" stroke-linejoin="round"/>`
  };

  const shape = shapes[cat.shape] || shapes.lines;

  const svg = `<svg width="800" height="440" viewBox="0 0 800 440" xmlns="http://www.w3.org/2000/svg">`
    + `<defs><pattern id="dp" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">`
    + `<circle cx="12" cy="12" r="1" fill="#1B2C42" opacity="0.5"/></pattern></defs>`
    + `<rect width="800" height="440" fill="#0D1520"/>`
    + `<rect width="800" height="440" fill="url(#dp)"/>`
    + `<rect x="0" y="0" width="4" height="440" fill="#C49A3C"/>`
    + shape
    + `<text x="50" y="172" font-family="Courier New,monospace" font-size="11" fill="#C49A3C" letter-spacing="2">${escapeHtmlForSvg(cat.label)}</text>`
    + `<text x="50" y="218" font-family="system-ui,-apple-system,Arial,sans-serif" font-size="26" font-weight="700" fill="#ffffff">${titleSvg}</text>`
    + tagEls
    + `</svg>`;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function escapeHtmlForSvg(str) {
  return str.replace(/[&<>]/g, function(m) {
    if (m === '&') return '&amp;';
    if (m === '<') return '&lt;';
    if (m === '>') return '&gt;';
    return m;
  });
}

function getProjectImage(project) {
  return generatePlaceholder(project);
}

// ---------- RENDERING LOGIC ----------
let currentFilter = "all";
let currentSearch = "";

const gridContainer = document.getElementById("projectsGrid");
const searchInput = document.getElementById("searchBar");
const filterChips = document.querySelectorAll(".filter-chip");
const modal = document.getElementById("projectModal");
const modalClose = document.querySelector(".modal-close-button");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");
const modalTech = document.getElementById("modalTech");
const modalGithub = document.getElementById("modalGithubLink");
const modalReport = document.getElementById("modalReportLink");

function renderProjects() {
  const filtered = PROJECTS_DATA.filter(proj => {
    const matchCategory = currentFilter === "all" || proj.category === currentFilter;
    const term = currentSearch.trim().toLowerCase();
    const matchSearch = term === "" ||
      proj.title.toLowerCase().includes(term) ||
      proj.shortDesc.toLowerCase().includes(term) ||
      proj.technologies.some(t => t.toLowerCase().includes(term));
    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    gridContainer.innerHTML = `<div class="no-results">✨ No projects match. Try another filter or keyword.</div>`;
    return;
  }

  gridContainer.innerHTML = filtered.map(proj => `
    <div class="project-card" data-id="${proj.id}">
      <img class="card-img" src="${getProjectImage(proj)}" alt="${escapeHtml(proj.title)}" loading="lazy">
      <div class="card-body">
        <div class="card-category">${proj.category}</div>
        <h3 class="card-title">${escapeHtml(proj.title)}</h3>
        <p class="card-desc">${escapeHtml(proj.shortDesc)}</p>
        <div class="card-tech">
          ${proj.technologies.slice(0, 4).map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`).join('')}
          ${proj.technologies.length > 4 ? `<span class="tech-tag">+${proj.technologies.length - 4}</span>` : ''}
        </div>
        <div class="card-buttons">
          <button class="card-btn card-btn-primary" data-detail="${proj.id}">Details</button>
          ${proj.github ? `<a href="${proj.github}" target="_blank" class="card-btn card-btn-outline">GitHub</a>` : ''}
        </div>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('[data-detail]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = btn.getAttribute('data-detail');
      const project = PROJECTS_DATA.find(p => p.id === id);
      if (project) openModal(project);
    });
  });
}

function escapeHtml(str) {
  return str.replace(/[&<>]/g, function(m) {
    if (m === '&') return '&amp;';
    if (m === '<') return '&lt;';
    if (m === '>') return '&gt;';
    return m;
  });
}

function openModal(project) {
  modalTitle.innerText = project.title;
  modalImage.src = getProjectImage(project);
  modalDescription.innerHTML = project.fullDesc || `<p>${project.shortDesc}</p>`;
  modalTech.innerHTML = project.technologies.map(t => `<span>${escapeHtml(t)}</span>`).join('');
  
  if (project.github) {
    modalGithub.href = project.github;
    modalGithub.style.display = "inline-flex";
  } else {
    modalGithub.style.display = "none";
  }
  if (project.reportPDF) {
    modalReport.href = project.reportPDF;
    modalReport.style.display = "inline-flex";
  } else {
    modalReport.style.display = "none";
  }
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    currentSearch = e.target.value;
    renderProjects();
  });
}

filterChips.forEach(chip => {
  chip.addEventListener("click", () => {
    filterChips.forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    currentFilter = chip.getAttribute("data-cat");
    renderProjects();
  });
});

if (modalClose) modalClose.addEventListener("click", closeModal);
window.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });

const hamburger = document.getElementById('hamburger');
const mainNavLinks = document.getElementById('mainNavLinks');
if (hamburger && mainNavLinks) {
  hamburger.addEventListener('click', () => mainNavLinks.classList.toggle('open'));
}

renderProjects();