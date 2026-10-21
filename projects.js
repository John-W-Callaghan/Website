// projects.js: project data and the search/filter list on projects.html.
// A project can belong to several categories; categories[0] is the one shown on its row,
// and the filter matches any of them. fullDesc is trusted, hand-written HTML.

const PROJECTS_DATA = [
  // ─── Flagship / recent ───────────────────────────────────────────
  {
    id: "dev-honey",
    title: "Dev Honey – Semantic Search for Open Source Tools",
    categories: ["Web & Security", "AI & ML", "Python"],
    image: null,
    shortDesc: "Hybrid semantic + keyword search engine for GitHub repos and Claude Skills. Browser-side embeddings via transformers.js, pgvector in Postgres, zero LLM cost at query time.",
    fullDesc: `<p>Full-stack semantic search engine for discovering open-source tools and Claude Skills. Queries are embedded in the browser using transformers.js (all-MiniLM-L6-v2 via ONNX in a Web Worker) and matched server-side with pgvector HNSW + weighted full-text rank in a single SQL function — zero LLM cost at query time.</p><p>Progressive results: keyword matches render in under a second while the ~30 MB model downloads on first visit, then upgrade in place to semantic results (~400 ms on repeat searches). A Python indexing pipeline runs daily via GitHub Actions, pulling repos from GitHub Search, topics, and trending, plus a dedicated skills pipeline that finds SKILL.md files, parses YAML frontmatter, and deduplicates by content hash. Trending scores are derived from daily star snapshots. Tested end to end with Vitest and pytest, type-checked and linted in CI.</p>`,
    technologies: ["Next.js", "TypeScript", "React", "Supabase", "pgvector", "Python", "transformers.js", "Tailwind CSS"],
    github: "https://github.com/John-W-Callaghan/dev-honey",
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
    id: "agent-forge",
    title: "Agent Forge – One-Shot Agent Builder",
    categories: ["AI & ML", "Python"],
    image: null,
    shortDesc: "Python CLI that turns a plain-English app idea into a complete, reviewed project using seven Claude-based agents across five pipeline phases.",
    fullDesc: `<p>A Python CLI tool that converts a plain-English app idea into a complete, code-reviewed project. Seven specialised Claude-based agents run across five phases: scope, design, build, review, and ship. Each agent passes validated JSON (Pydantic models with automatic retry) to the next, and a reviewer agent sends critical issues back to the builders for iterative fixes.</p><p>Generated projects default to Next.js, TypeScript, Supabase, and Tailwind, with optional Docker Compose, Vercel config, and GitHub Actions CI scaffolding. Configurable per-agent models via config — Sonnet for most roles, Haiku for the Shipper.</p>`,
    technologies: ["Python", "Anthropic Claude API", "Pydantic", "CLI"],
    github: "https://github.com/John-W-Callaghan/one-shot-agent-builder",
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
    title: "Vessel Image Data Labeller",
    categories: ["AI & ML", "Python"],
    image: null,
    shortDesc: "Image labelling GUI for vessel segmentation with Frangi filter-assisted mask generation and a CNN pipeline for vessel detection.",
    fullDesc: `<p>Collaborative project for labelling vessel images. Features a custom labelling GUI (draw/erase masks, navigate images, save labels), Frangi filter-based AI mask generation to assist labelling, and a CNN pipeline for vessel detection.</p><p>Uses OpenCV for image processing, TensorFlow/Keras for the neural network, and scikit-image for analysis. Built with Ethan Koland.</p>`,
    technologies: ["Python", "TensorFlow", "OpenCV", "scikit-image", "NumPy", "matplotlib"],
    github: "https://github.com/EthanKoland/vesselDataLabler",
    reportPDF: null
  },

  // ─── Web & Apps ──────────────────────────────────────────────────
  {
    id: "forge-my-career",
    title: "Forge My Career – AI Resume Generator",
    categories: ["Web & Security", "AI & ML"],
    image: null,
    shortDesc: "AI-powered CV and resume generator — paste a job description, and it tailors your resume from a personal knowledge base.",
    fullDesc: `<p>A React web application that generates tailored CVs and resumes. Users input a job description and the tool matches it against a personal knowledge base of skills, experience, and education to produce an optimised, role-specific document.</p><p>Built with Vite, React, TypeScript, and Tailwind CSS. Uses shadcn/ui components (Radix UI), React Hook Form with Zod validation, and React Query for state management. Features onboarding, experience entry, and a dashboard for generating and downloading resumes.</p>`,
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Radix UI", "Zod"],
    github: "https://github.com/John-W-Callaghan/forge-my-career",
    reportPDF: null
  },
  {
    id: "workout-app",
    title: "Workout Planner App",
    categories: ["Web & Security", "Python"],
    image: null,
    shortDesc: "A workout planning application built with Node.js for organising and tracking exercise routines.",
    fullDesc: `<p>A workout planning application for organising and tracking exercise routines. Built with JavaScript and Node.js, with npm for dependency management.</p>`,
    technologies: ["JavaScript", "Node.js", "npm"],
    github: "https://github.com/John-W-Callaghan/Workout-app",
    reportPDF: null
  },
  {
    id: "ai-workout-planner",
    title: "AI Workout Planner",
    categories: ["AI & ML", "Python"],
    image: null,
    shortDesc: "An AI-assisted workout planner that generates personalised exercise routines based on user goals and preferences.",
    fullDesc: `<p>An AI-powered workout planner that generates personalised exercise routines tailored to user goals, fitness level, and preferences. Takes the manual guesswork out of programming training sessions.</p>`,
    technologies: ["Python", "AI", "Fitness"],
    github: "https://github.com/John-W-Callaghan/AI-workout-planner",
    reportPDF: null
  },
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
  },

  // ─── Data Analysis (freeCodeCamp) ────────────────────────────────
  {
    id: "sea-level-predictor",
    title: "Sea Level Predictor",
    categories: ["Data Analysis", "Python"],
    image: null,
    shortDesc: "Visualises and predicts global sea level rise from EPA data using linear regression and matplotlib.",
    fullDesc: `<p>Analyses EPA global average sea level change data and generates predictions using linear regression. Produces a scatter plot of historical data overlaid with two lines of best fit — one for the full dataset and one from the year 2000 onwards — to project sea level rise through 2050. Built for the freeCodeCamp Data Analysis with Python certification.</p>`,
    technologies: ["Python", "pandas", "matplotlib", "scipy"],
    github: "https://github.com/John-W-Callaghan/Sea-Level-Predictor",
    reportPDF: null
  },
  {
    id: "page-view-visualiser",
    title: "Page View Time Series Visualiser",
    categories: ["Data Analysis", "Python"],
    image: null,
    shortDesc: "Time series visualisation of freeCodeCamp forum page views — line charts, bar charts, and box plots with pandas and matplotlib.",
    fullDesc: `<p>Visualises freeCodeCamp.org forum page view data as a time series. Generates three chart types: a line chart of daily page views, a bar chart of average monthly views grouped by year, and box plots showing seasonal distributions. Built for the freeCodeCamp Data Analysis with Python certification.</p>`,
    technologies: ["Python", "pandas", "matplotlib", "seaborn"],
    github: "https://github.com/John-W-Callaghan/Page-View-Time-Visualiser",
    reportPDF: null
  },
  {
    id: "medical-data-viz",
    title: "Medical Data Visualiser",
    categories: ["Data Analysis", "Python"],
    image: null,
    shortDesc: "Visualises medical examination data — categorical plots, heatmaps, and correlation analysis with seaborn and matplotlib.",
    fullDesc: `<p>Explores relationships in medical examination data using categorical plots and a correlation heatmap. Cleans and processes patient data (BMI, cholesterol, glucose, lifestyle factors) and generates visual summaries to highlight health patterns. Built for the freeCodeCamp Data Analysis with Python certification.</p>`,
    technologies: ["Python", "pandas", "seaborn", "matplotlib"],
    github: "https://github.com/John-W-Callaghan/medical-data-visualizer",
    reportPDF: null
  },
  {
    id: "data-analyzer",
    title: "Demographic Data Analyser",
    categories: ["Data Analysis", "Python"],
    image: null,
    shortDesc: "Analyses census demographic data with pandas — income distribution, education, occupation, and work-hour statistics.",
    fullDesc: `<p>Analyses demographic data extracted from the 1994 Census database. Answers questions about race distribution, average age of men, education levels, income percentages, work hours, and occupation statistics using pandas. Built for the freeCodeCamp Data Analysis with Python certification.</p>`,
    technologies: ["Python", "pandas", "NumPy"],
    github: "https://github.com/John-W-Callaghan/Data-Analyzer",
    reportPDF: null
  },
  {
    id: "mean-variance-calc",
    title: "Mean-Variance-Standard Deviation Calculator",
    categories: ["Data Analysis", "Python"],
    image: null,
    shortDesc: "Calculates mean, variance, standard deviation, max, min, and sum for rows, columns, and the flattened matrix using NumPy.",
    fullDesc: `<p>Takes a list of nine numbers and converts it into a 3×3 NumPy array, then calculates mean, variance, standard deviation, max, min, and sum along both axes and for the flattened matrix. Built for the freeCodeCamp Data Analysis with Python certification.</p>`,
    technologies: ["Python", "NumPy"],
    github: "https://github.com/John-W-Callaghan/Mean-variance-Calc",
    reportPDF: null
  },

  // ─── Python (freeCodeCamp Scientific Computing) ──────────────────
  {
    id: "budget-app",
    title: "Budget App",
    categories: ["Python"],
    image: null,
    shortDesc: "Object-oriented budget tracker with deposit, withdrawal, transfer, and a percentage-based spending bar chart.",
    fullDesc: `<p>An object-oriented budget application where each budget category (food, clothing, entertainment, etc.) tracks deposits, withdrawals, and transfers. Includes a spending chart that shows the percentage breakdown across categories as a text-based bar chart. Built for the freeCodeCamp Scientific Computing with Python certification.</p>`,
    technologies: ["Python", "OOP"],
    github: "https://github.com/John-W-Callaghan/Budget-App",
    reportPDF: null
  },
  {
    id: "time-calculator",
    title: "Time Calculator",
    categories: ["Python"],
    image: null,
    shortDesc: "Adds a duration to a start time, handling AM/PM conversion, day rollover, and optional day-of-week tracking.",
    fullDesc: `<p>A time calculator that adds a duration to a given start time. Handles 12-hour AM/PM format, correctly rolls over midnight boundaries, counts elapsed days, and optionally tracks the day of the week. Built for the freeCodeCamp Scientific Computing with Python certification.</p>`,
    technologies: ["Python"],
    github: "https://github.com/John-W-Callaghan/Time-Calculator",
    reportPDF: null
  },
  {
    id: "polygon-area-calc",
    title: "Polygon Area Calculator",
    categories: ["Python"],
    image: null,
    shortDesc: "OOP shape calculator for rectangles and squares — area, perimeter, diagonal, and ASCII picture generation.",
    fullDesc: `<p>An object-oriented shape calculator with Rectangle and Square classes (Square inherits from Rectangle). Calculates area, perimeter, diagonal, and generates ASCII art representations. Supports setting dimensions and computing how many smaller shapes fit inside a larger one. Built for the freeCodeCamp Scientific Computing with Python certification.</p>`,
    technologies: ["Python", "OOP"],
    github: "https://github.com/John-W-Callaghan/Polygon-Area-calc",
    reportPDF: null
  },
  {
    id: "probability-calculator",
    title: "Probability Calculator",
    categories: ["Python"],
    image: null,
    shortDesc: "Monte Carlo probability estimator — simulates random draws from a hat to estimate the probability of drawing specific combinations.",
    fullDesc: `<p>A Monte Carlo simulation tool that estimates the probability of drawing certain combinations of coloured balls from a hat. Uses random sampling over a configurable number of experiments to approximate probabilities. Built for the freeCodeCamp Scientific Computing with Python certification.</p>`,
    technologies: ["Python", "Monte Carlo", "random"],
    github: "https://github.com/John-W-Callaghan/Probability-calculator",
    reportPDF: null
  },
  {
    id: "arithmetic-formatter",
    title: "Arithmetic Formatter",
    categories: ["Python"],
    image: null,
    shortDesc: "Formats arithmetic problems vertically side by side, with optional answers — handles input validation and alignment.",
    fullDesc: `<p>Takes a list of arithmetic problems (addition and subtraction) and formats them vertically, arranged side by side. Validates input (max five problems, four-digit operands, digits only) and optionally displays the answers. Built for the freeCodeCamp Scientific Computing with Python certification.</p>`,
    technologies: ["Python"],
    github: "https://github.com/John-W-Callaghan/Arithmeticcalc",
    reportPDF: null
  },

  // ─── Practice & other ────────────────────────────────────────────
  {
    id: "neetcode",
    title: "NeetCode Problem Solutions",
    categories: ["Python"],
    image: null,
    shortDesc: "Collection of NeetCode.io data structures and algorithms problem solutions, synced from NeetCode's GitHub integration.",
    fullDesc: `<p>A growing collection of solutions to data structures and algorithms problems from NeetCode.io, automatically synced via NeetCode's GitHub Sync feature. Covers arrays, hashing, two pointers, sliding window, stacks, binary search, linked lists, trees, and more.</p>`,
    technologies: ["Python", "TypeScript", "DSA"],
    github: "https://github.com/John-W-Callaghan/neetcode-submissions",
    reportPDF: null
  }
];

// ---------- Rendering ----------
const list     = document.getElementById("projects");
const controls = document.getElementById("controls");
const search   = document.getElementById("search");
const count    = document.getElementById("count");
const filters  = document.querySelectorAll(".filter");

let currentFilter = "all";

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, ch => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[ch]));
}

function rowHtml(proj) {
  const links = [];
  if (proj.github)    links.push(`<a href="${escapeHtml(proj.github)}" rel="noopener noreferrer">Source on GitHub</a>`);
  if (proj.reportPDF) links.push(`<a href="${escapeHtml(proj.reportPDF)}">Report (PDF)</a>`);
  const detailId = `detail-${proj.id}`;
  return `
    <li class="project" id="${proj.id}">
      <div class="project-head">
        <h2 class="row-title">${escapeHtml(proj.title)}</h2>
        <span class="mono">${escapeHtml(proj.categories[0])}</span>
      </div>
      <p class="row-text">${escapeHtml(proj.shortDesc)}</p>
      <p class="row-meta">${proj.technologies.map(escapeHtml).join(", ")}</p>
      <div class="project-detail" id="${detailId}" hidden>${proj.fullDesc}</div>
      <p class="row-links">
        <button class="toggle" type="button" aria-expanded="false" aria-controls="${detailId}">More detail</button>
        ${links.join("")}
      </p>
    </li>`;
}

function matches(proj, term) {
  if (currentFilter !== "all" && !proj.categories.includes(currentFilter)) return false;
  if (!term) return true;
  return proj.title.toLowerCase().includes(term) ||
         proj.shortDesc.toLowerCase().includes(term) ||
         proj.technologies.some(t => t.toLowerCase().includes(term));
}

function render() {
  const term = search.value.trim().toLowerCase();
  const shown = PROJECTS_DATA.filter(p => matches(p, term));

  list.innerHTML = shown.length
    ? shown.map(rowHtml).join("")
    : `<li class="empty">No projects match that search.<button class="toggle" type="button" id="reset">Clear filters</button></li>`;

  count.textContent = shown.length === PROJECTS_DATA.length
    ? `${shown.length} projects`
    : `${shown.length} of ${PROJECTS_DATA.length} projects`;
}

function setFilter(cat) {
  currentFilter = cat;
  filters.forEach(f => f.setAttribute("aria-pressed", String(f.dataset.cat === cat)));
  render();
}

function expand(row) {
  const btn = row && row.querySelector(".toggle[aria-controls]");
  if (!btn) return;
  btn.setAttribute("aria-expanded", "true");
  btn.textContent = "Less detail";
  document.getElementById(btn.getAttribute("aria-controls")).hidden = false;
}

// One delegated listener survives every re-render.
list.addEventListener("click", e => {
  const btn = e.target.closest(".toggle");
  if (!btn) return;
  if (btn.id === "reset") {
    search.value = "";
    setFilter("all");
    search.focus();
    return;
  }
  const open = btn.getAttribute("aria-expanded") !== "true";
  btn.setAttribute("aria-expanded", String(open));
  btn.textContent = open ? "Less detail" : "More detail";
  document.getElementById(btn.getAttribute("aria-controls")).hidden = !open;
});

search.addEventListener("input", render);
filters.forEach(f => f.addEventListener("click", () => setFilter(f.dataset.cat)));

controls.hidden = false;
render();

// Deep links from the home page (projects.html#pqc-dissertation) open that project.
function openFromHash() {
  const id = decodeURIComponent(location.hash.slice(1));
  if (!id || !PROJECTS_DATA.some(p => p.id === id)) return;
  if (!document.getElementById(id)) { search.value = ""; setFilter("all"); }
  const row = document.getElementById(id);
  expand(row);
  row.scrollIntoView({ block: "start" });
}
openFromHash();
window.addEventListener("hashchange", openFromHash);
