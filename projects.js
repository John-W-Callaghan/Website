// projects.js: curated project data with auto-generated placeholders
// Each project can belong to multiple categories (categories[0] is the "primary" one used
// for the card badge and the generated placeholder icon); the filter bar matches on any of them.

const PROJECTS_DATA = [
  // ─── Flagship / recent ───────────────────────────────────────────
  {
    id: "skill-issue",
    title: "Skill Issue: Semantic Search for Open Source Tools",
    categories: ["AI & ML", "Web & Security", "Python", "Hackathon"],
    image: null,
    shortDesc: "Hybrid semantic + keyword search engine for GitHub repos and Claude Skills. Browser-side embeddings via transformers.js, pgvector in Postgres, zero LLM cost at query time.",
    fullDesc: `<p>Built in a six-hour online AI hackathon, where it placed. Skill Issue checks whether an open-source repository or Claude skill already does what you need before you build it yourself.</p><p>Full-stack semantic search engine for discovering open-source tools and Claude Skills. Queries are embedded in the browser using transformers.js (all-MiniLM-L6-v2 via ONNX in a Web Worker) and matched server-side with pgvector HNSW + weighted full-text rank in a single SQL function — zero LLM cost at query time.</p><p>Progressive results: keyword matches render in under a second while the ~30 MB model downloads on first visit, then upgrade in place to semantic results (~400 ms on repeat searches). A Python indexing pipeline runs daily via GitHub Actions, pulling repos from GitHub Search, topics, and trending, plus a dedicated skills pipeline that finds SKILL.md files, parses YAML frontmatter, and deduplicates by content hash. Trending scores are derived from daily star snapshots. Tested end to end with Vitest and pytest, type-checked and linted in CI.</p>`,
    technologies: ["Next.js", "TypeScript", "React", "Supabase", "pgvector", "Python", "transformers.js", "Tailwind CSS"],
    github: "https://github.com/John-W-Callaghan/dev-honey",
    live: "https://skill-issue-dev.vercel.app",
    reportPDF: null
  },
  {
    id: "pqc-dissertation",
    title: "Post-Quantum Authentication Pipeline for Connected Vehicles",
    categories: ["Academic", "Python", "Web & Security"],
    image: null,
    shortDesc: "End-to-end post-quantum authentication pipeline for connected vehicle telemetry, benchmarking ML-DSA against ECDSA P-256 across 6,000 iterations.",
    fullDesc: `<p>End-to-end post-quantum authentication pipeline for connected vehicle telemetry. Client-side OBD emulator signs telemetry using ML-DSA (NIST FIPS 204); cloud-side verifier enforces freshness and replay protection with a five-stage cheap-to-expensive check pipeline. Fully containerised with Docker Compose.</p><p>Benchmarked ML-DSA against ECDSA P-256 across 6,000 measured iterations. Key finding: the binding constraint on PQC migration is signature size, not compute (wire packet 17.6x larger, verification only 1.3x slower). 45 tests, STRIDE threat model, RFC 8785 canonicalisation.</p>`,
    technologies: ["Python", "FastAPI", "Docker", "liboqs", "ML-DSA", "pytest"],
    github: "https://github.com/John-W-Callaghan/Post-quantumn-Encryption",
    reportPDF: null
  },
  {
    id: "odia-ocr",
    title: "CNN OCR for Odia Script",
    categories: ["Academic", "AI & ML", "Python"],
    image: null,
    shortDesc: "Deep learning OCR for handwritten Odia script using transfer learning, 84% test accuracy on a low-resource language.",
    fullDesc: `<p>Deep learning OCR system for handwritten Odia, a low-resource Indic script. Used transfer learning on pre-trained CNN architectures adapted to the target script. Achieved 84% test accuracy despite limited training data availability. Full BSc dissertation project, University of East Anglia.</p>`,
    technologies: ["Python", "TensorFlow", "Keras", "Transfer Learning", "CNN"],
    github: "https://github.com/John-W-Callaghan/OCRODIA",
    reportPDF: "assets/ocrodia.pdf"
  },
  {
    id: "cve-translator",
    title: "CVE-to-My-Stack Translator",
    categories: ["Web & Security", "Python", "Hackathon"],
    image: null,
    shortDesc: "Filters daily CVE feeds against a defined asset list, enriched with EPSS exploitation-probability scores and CISA KEV flags.",
    fullDesc: `<p>DevSecOps tool that filters daily CVE feeds against a defined asset list, enriched with EPSS exploitation-probability scores and CISA Known Exploited Vulnerabilities flags.</p><p>This is the prioritisation model production security teams actually use. Built at CyberHack 2026 hackathon, CSE Connect London.</p>`,
    technologies: ["Python", "NVD API", "EPSS", "CISA KEV", "Data pipelines"],
    github: "https://github.com/John-W-Callaghan/Hackathon-2026",
    reportPDF: null
  },
  {
    id: "owasp-web-app",
    title: "OWASP-Hardened Full-Stack Web App",
    categories: ["Web & Security", "Academic"],
    image: null,
    shortDesc: "Full-stack Node.js/Express app hardened against the OWASP Top 10: SQL injection, XSS, CSRF, and session attacks, containerised with Docker.",
    fullDesc: `<p>Full-stack Node.js and Express application hardened against the OWASP Top 10 as a taught-module project. SQL injection closed with parameterised queries; XSS and CSRF closed with input sanitisation, CSRF tokens, and CSP headers; session hijacking and account enumeration closed with secure session handling and least-privilege database access.</p><p>PostgreSQL for persistence, the whole stack packaged in Docker for reproducible deployment. Top 10 mitigations applied end to end on a real running application rather than as a one-off checklist exercise.</p>`,
    technologies: ["Node.js", "Express", "JavaScript", "PostgreSQL", "Docker"],
    github: "https://github.com/John-W-Callaghan",
    reportPDF: null
  },

  // ─── AI & ML ─────────────────────────────────────────────────────
  {
    id: "ai-chatbot",
    title: "Intelligent Train Chatbot System",
    categories: ["AI & ML", "Academic", "Python"],
    image: null,
    shortDesc: "Conversational AI chatbot for finding cheap UK train tickets and predicting arrival times for delayed services, with a Tkinter GUI.",
    fullDesc: `<p>A conversational AI chatbot built as coursework for a UEA Artificial Intelligence module. It helps users find the cheapest UK train tickets and predict train arrival times when services are delayed, using NLP for intent recognition and ML for delay prediction.</p><p>Users interact through a Tkinter graphical interface. The pipeline uses spaCy/NLTK for natural language processing, scikit-learn for machine learning models, and BeautifulSoup for web scraping live data.</p>`,
    technologies: ["Python", "spaCy", "NLTK", "scikit-learn", "Tkinter", "BeautifulSoup"],
    github: "https://github.com/John-W-Callaghan/AI-CW2-Developing-An-Intelligent-Chatbot-System-main",
    reportPDF: null
  },
  {
    id: "ml-classifiers",
    title: "Machine Learning Classifiers Comparison",
    categories: ["AI & ML", "Academic", "Python"],
    image: null,
    shortDesc: "Comparison of decision tree, ensemble, and evaluation methods on the breast cancer dataset — attribute quality, model selection, and performance metrics.",
    fullDesc: `<p>Academic project comparing machine learning classifiers on a breast cancer dataset. Covers attribute quality measures, decision trees, ensemble methods (bagging, boosting), and systematic evaluation with cross-validation and performance metrics.</p><p>Includes generated decision tree visualisations and an ensemble results analysis. Built as part of a taught ML module.</p>`,
    technologies: ["Python", "scikit-learn", "Decision Trees", "Ensemble Methods"],
    github: "https://github.com/John-W-Callaghan/Machine-Learning-Classifiers",
    reportPDF: null
  },
  {
    id: "emotions-predictor",
    title: "Emotion Predictor",
    categories: ["AI & ML", "Python"],
    image: null,
    shortDesc: "Predicts emotions (sadness, joy, anger, fear, love, surprise) from text input using logistic regression with a Tkinter GUI.",
    fullDesc: `<p>A text-based emotion prediction tool that classifies user-entered sentences into six emotions: sadness, joy, love, anger, fear, and surprise. Uses a logistic regression model trained on a labelled text dataset, with CountVectorizer for feature extraction.</p><p>Includes a Tkinter GUI where users type a sentence and get an instant prediction. Built with scikit-learn and pandas.</p>`,
    technologies: ["Python", "scikit-learn", "pandas", "Tkinter", "NLP"],
    github: "https://github.com/John-W-Callaghan/Emotions_predictor",
    reportPDF: null
  },
  {
    id: "vessel-labeller",
    title: "Catheter Labelling Tool (vesselDataLabler)",
    categories: ["AI & ML", "Python"],
    image: null,
    shortDesc: "Tkinter labelling tool for catheter positions in chest X-ray sequences, built during a 6-week EPSRC-funded research internship at UEA.",
    fullDesc: `<p>Built during a 6-week EPSRC-funded research internship at UEA, working with PhD student Ethan Koland. A Tkinter GUI for labelling catheter positions across adjacent chest X-ray frames. I used it to label training data, then fine-tuned a pre-trained CNN on that data.</p><p>Uses OpenCV for image processing and TensorFlow/Keras for the neural network.</p>`,
    technologies: ["Python", "Tkinter", "OpenCV", "TensorFlow", "NumPy"],
    github: "https://github.com/EthanKoland/vesselDataLabler",
    reportPDF: null
  },

  // ─── Web & Apps ──────────────────────────────────────────────────
  {
    id: "parking-system",
    title: "Parking Management System",
    categories: ["Web & Security", "Academic"],
    image: null,
    shortDesc: "Digital car parking system with booking, navigation, and automatic billing — Node.js, PostgreSQL, and Docker.",
    fullDesc: `<p>A digital car parking management system built as a group project. Users can register, log in, make and manage bookings, and view their balance. The database automatically adjusts balances when bookings change and charges by the car park's hourly rate, rounded up.</p><p>Built with Node.js for the application server, PostgreSQL for persistence (with triggers for automatic billing), and Docker Compose for containerised deployment. Collaborative project with Anthony de Cruz.</p>`,
    technologies: ["Node.js", "PostgreSQL", "Docker", "Docker Compose"],
    github: "https://github.com/Anthony-de-cruz/Parking-Management-System",
    reportPDF: null
  },
  {
    id: "weatherwarn",
    title: "WeatherWarn: SMS Weather Alerts",
    categories: ["Web & Security", "Academic"],
    image: null,
    shortDesc: "Group project web app that shows weather status and lets users opt in to SMS warnings, built with Node.js, Express, MySQL and Twilio.",
    fullDesc: "<p>A university group project (Synoptic Project, Group 73). A Node.js and Express web app that shows weather status and lets people opt in to, or out of, SMS warnings sent through Twilio, with phone numbers stored in MySQL.</p><p>My part was the phone number feature.</p>",
    technologies: ["Node.js", "Express", "MySQL", "Twilio"],
    github: null,
    reportPDF: null
  },
  {
    id: "text-rpg",
    title: "Text-Based Fantasy RPG",
    categories: ["Python", "Academic"],
    image: null,
    shortDesc: "Python text adventure built by a group of four, with save and load, a leaderboard and character stats.",
    fullDesc: "<p>A text-based fantasy adventure game in Python, built by a group of four for an Applications Programming assessment.</p><p>I built the save and load system, including resuming a run from a save, with its unit tests, and worked on the leaderboard and character stats.</p>",
    technologies: ["Python", "unittest"],
    github: null,
    reportPDF: null
  },
  {
    id: "networks-cw",
    title: "Networks Coursework",
    categories: ["Academic", "Python"],
    image: null,
    shortDesc: "University networking coursework — Python-based network analysis with integrity testing and structured data processing.",
    fullDesc: `<p>University coursework project for a networking module. Implements network-related analysis in Python with integrity testing, structured source code, and data processing. Includes unit tests for data integrity verification.</p>`,
    technologies: ["Python", "Networking", "pytest"],
    github: "https://github.com/John-W-Callaghan/NetworksCW",
    reportPDF: null
  },

  // ─── Search & NLP ────────────────────────────────────────────────
  {
    id: "videogame-search",
    title: "Video Game Search Engine",
    categories: ["Python", "AI & ML"],
    image: null,
    shortDesc: "TF-IDF search engine over a corpus of video game HTML documents — tokenisation, HTML parsing, and ranked retrieval.",
    fullDesc: `<p>A Python search engine that indexes a collection of HTML documents about video games and ranks results using TF-IDF (term frequency–inverse document frequency). Queries return the most relevant pages from the corpus.</p><p>Uses BeautifulSoup for HTML parsing, scikit-learn for TF-IDF vectorisation, and NLTK for tokenisation and text preprocessing.</p>`,
    technologies: ["Python", "scikit-learn", "BeautifulSoup", "NLTK", "TF-IDF"],
    github: "https://github.com/John-W-Callaghan/Videogame-Search-engine",
    reportPDF: null
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

  const primaryCategory = project.categories[0];
  const cat = catConfig[primaryCategory] || catConfig["Academic"];

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
const modalLive = document.getElementById("modalLiveLink");
const modalReport = document.getElementById("modalReportLink");

function cardHtml(proj) {
  return `
    <div class="project-card" data-id="${proj.id}">
      <img class="card-img" src="${getProjectImage(proj)}" alt="${escapeHtml(proj.title)}" loading="lazy">
      <div class="card-body">
        <div class="card-category">${escapeHtml(proj.categories[0])}</div>
        <h2 class="card-title">${escapeHtml(proj.title)}</h2>
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
  `;
}

function renderProjects() {
  const filtered = PROJECTS_DATA.filter(proj => {
    const matchCategory = currentFilter === "all" || proj.categories.includes(currentFilter);
    const term = currentSearch.trim().toLowerCase();
    const matchSearch = term === "" ||
      proj.title.toLowerCase().includes(term) ||
      proj.shortDesc.toLowerCase().includes(term) ||
      proj.technologies.some(t => t.toLowerCase().includes(term));
    return matchCategory && matchSearch;
  });

  gridContainer.innerHTML = filtered.length === 0
    ? `<div class="no-results">No projects match. Try another filter or keyword.</div>`
    : filtered.map(cardHtml).join('');

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
  modalImage.alt = project.title;
  modalDescription.innerHTML = project.fullDesc || `<p>${project.shortDesc}</p>`;
  modalTech.innerHTML = project.technologies.map(t => `<span>${escapeHtml(t)}</span>`).join('');

  if (project.github) {
    modalGithub.href = project.github;
    modalGithub.style.display = "inline-flex";
  } else {
    modalGithub.style.display = "none";
  }
  if (project.live && modalLive) {
    modalLive.href = project.live;
    modalLive.style.display = "inline-flex";
  } else if (modalLive) {
    modalLive.style.display = "none";
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
