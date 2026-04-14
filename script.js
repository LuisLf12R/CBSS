/* =========================================================
   CBSS v2 Interactivity + accessibility helpers
========================================================= */

// -----------------------------
// Placeholder data buckets
// -----------------------------
const CASES = [
  {
    title: "Consumer Banking Growth Playbook",
    category: "finance",
    year: "2026",
    difficulty: "Intermediate",
    summary: "Placeholder summary for a case focused on customer retention and cross-sell strategy.",
  },
  {
    title: "EV Startup Market Entry",
    category: "consulting",
    year: "2026",
    difficulty: "Advanced",
    summary: "Placeholder summary on international expansion, competitive response, and pricing strategy.",
  },
  {
    title: "Creator Economy Platform Monetization",
    category: "tech",
    year: "2025",
    difficulty: "Intermediate",
    summary: "Placeholder summary for feature prioritization, subscription model design, and KPI tracking.",
  },
  {
    title: "CPG Brand Relaunch Strategy",
    category: "marketing",
    year: "2025",
    difficulty: "Beginner",
    summary: "Placeholder summary for segmentation, messaging architecture, and campaign planning.",
  },
  {
    title: "Healthcare Ops Turnaround",
    category: "consulting",
    year: "2026",
    difficulty: "Advanced",
    summary: "Placeholder summary on reducing wait times, staffing redesign, and margin improvement.",
  },
  {
    title: "Fintech Product GTM",
    category: "tech",
    year: "2025",
    difficulty: "Intermediate",
    summary: "Placeholder summary for growth loops, onboarding optimization, and lifecycle messaging.",
  },
];

const EVENTS = [
  {
    date: "2026-05-03",
    title: "Case Interview Foundations",
    description: "Placeholder workshop introducing frameworks and communication techniques.",
    format: "In-person",
  },
  {
    date: "2026-05-12",
    title: "Alumni Mentor Roundtable",
    description: "Placeholder panel with alumni sharing recruiting and project insights.",
    format: "Hybrid",
  },
  {
    date: "2026-05-21",
    title: "Spring Case Competition Finals",
    description: "Placeholder final-round presentations with judge feedback and networking.",
    format: "Virtual",
  },
];

const TEAM = [
  { name: "Member Name", role: "President", group: "leadership", bio: "Leads strategy and partnerships." },
  { name: "Member Name", role: "VP Operations", group: "leadership", bio: "Coordinates semester programming." },
  { name: "Member Name", role: "Director of Cases", group: "board", bio: "Curates and designs case content." },
  { name: "Member Name", role: "Director of Events", group: "board", bio: "Owns workshops and competitions." },
  { name: "Member Name", role: "Director of Marketing", group: "board", bio: "Builds storytelling and outreach." },
  { name: "Member Name", role: "Mentorship Lead", group: "board", bio: "Connects students with alumni." },
  { name: "Member Name", role: "Analyst", group: "general", bio: "Supports case prep operations." },
  { name: "Member Name", role: "Analyst", group: "general", bio: "Supports events and member onboarding." },
];

const STORIES = [
  {
    name: "Alumni Spotlight",
    role: "Former CBSS VP",
    body: "Placeholder story describing how case prep translated into stronger internship performance.",
    impact: "Now at: Global Consulting Firm",
  },
  {
    name: "Member Spotlight",
    role: "Current Analyst",
    body: "Placeholder story about building confidence in structured problem-solving and teamwork.",
    impact: "Applied skills to: Product internship",
  },
  {
    name: "Alumni Spotlight",
    role: "Former Director of Cases",
    body: "Placeholder story explaining how CBSS experience shaped interview readiness and leadership.",
    impact: "Now at: Fortune 500 strategy team",
  },
];

// -----------------------------
// Shared helpers
// -----------------------------
const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => [...document.querySelectorAll(selector)];

function formatEventDate(dateString) {
  const date = new Date(`${dateString}T00:00:00`);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function setMessage(el, text, tone = "success") {
  el.textContent = text;
  el.classList.remove("success", "error");
  el.classList.add(tone);
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// -----------------------------
// Mobile menu
// -----------------------------
const menuToggle = qs("#menuToggle");
const mobileMenu = qs("#mobileMenu");

menuToggle?.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

qsa("#mobileMenu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// -----------------------------
// Active nav states (desktop)
// -----------------------------
const sectionMap = [
  "#featured-case",
  "#case-library",
  "#events",
  "#team",
  "#stories",
  "#contact",
].map((id) => qs(id));

const navLinks = qsa("#desktopNav a");

function setActiveNavLink() {
  let activeId = "#featured-case";

  sectionMap.forEach((section) => {
    if (!section) return;
    const top = section.getBoundingClientRect().top;
    if (top <= 140) activeId = `#${section.id}`;
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === activeId;
    link.classList.toggle("active", isActive);
  });
}

window.addEventListener("scroll", setActiveNavLink, { passive: true });
setActiveNavLink();

// -----------------------------
// Render cases + filters + search
// -----------------------------
const casesGrid = qs("#casesGrid");
const caseSearch = qs("#caseSearch");
const caseYear = qs("#caseYear");
let activeCaseCategory = "all";

function badgeClass(category) {
  return {
    consulting: "badge-consulting",
    finance: "badge-finance",
    tech: "badge-tech",
    marketing: "badge-marketing",
  }[category] || "badge-consulting";
}

function renderCases() {
  const searchText = caseSearch.value.trim().toLowerCase();
  const selectedYear = caseYear.value;

  const filtered = CASES.filter((c) => {
    const categoryOk = activeCaseCategory === "all" || c.category === activeCaseCategory;
    const yearOk = selectedYear === "all" || c.year === selectedYear;
    const searchOk = `${c.title} ${c.summary}`.toLowerCase().includes(searchText);
    return categoryOk && yearOk && searchOk;
  });

  casesGrid.innerHTML = filtered
    .map(
      (c) => `
      <article class="card reveal">
        <span class="badge ${badgeClass(c.category)}">${c.category.toUpperCase()}</span>
        <h3>${c.title}</h3>
        <p>${c.summary}</p>
        <div class="meta-row"><span>${c.year}</span><span>${c.difficulty}</span></div>
        <a class="btn btn-primary btn-sm" href="#contact">View Case</a>
      </article>
    `
    )
    .join("");

  observeReveal();
}

qsa("[data-case-filter]").forEach((btn) => {
  btn.addEventListener("click", () => {
    qsa("[data-case-filter]").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeCaseCategory = btn.dataset.caseFilter;
    renderCases();
  });
});

caseSearch?.addEventListener("input", renderCases);
caseYear?.addEventListener("change", renderCases);

// -----------------------------
// Render events + toggle + countdown
// -----------------------------
const eventsCards = qs("#eventsCards");
const eventsTimeline = qs("#eventsTimeline");
const countdown = qs("#nextEventCountdown");

function renderEvents() {
  eventsCards.innerHTML = EVENTS.map(
    (e) => `
      <article class="card reveal">
        <p class="section-kicker">${formatEventDate(e.date)}</p>
        <h3>${e.title}</h3>
        <p>${e.description}</p>
        <div class="meta-row"><span>${e.format}</span></div>
        <a class="btn btn-primary btn-sm" href="#event-signup">Join →</a>
      </article>
    `
  ).join("");

  eventsTimeline.innerHTML = EVENTS.map(
    (e) => `
      <article class="timeline-item reveal">
        <p class="section-kicker">${formatEventDate(e.date)} • ${e.format}</p>
        <h3>${e.title}</h3>
        <p>${e.description}</p>
      </article>
    `
  ).join("");

  observeReveal();
}

qsa("[data-event-view]").forEach((btn) => {
  btn.addEventListener("click", () => {
    qsa("[data-event-view]").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const cardsMode = btn.dataset.eventView === "cards";
    eventsCards.hidden = !cardsMode;
    eventsTimeline.hidden = cardsMode;
  });
});

function updateCountdown() {
  const now = new Date();
  const next = EVENTS.map((e) => new Date(`${e.date}T00:00:00`)).find((d) => d >= now);

  if (!next) {
    countdown.textContent = "No upcoming placeholder events currently listed.";
    return;
  }

  const diff = next - now;
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  countdown.textContent = `${days} day${days === 1 ? "" : "s"} until next event (${formatEventDate(next.toISOString().slice(0, 10))}).`;
}

// -----------------------------
// Team + role filter
// -----------------------------
const teamGrid = qs("#teamGrid");
let activeTeam = "all";

function renderTeam() {
  const filtered = TEAM.filter((m) => activeTeam === "all" || m.group === activeTeam);

  teamGrid.innerHTML = filtered
    .map(
      (m) => `
      <article class="card reveal">
        <div class="team-avatar" aria-hidden="true"></div>
        <h3>${m.name}</h3>
        <p class="section-kicker">${m.role}</p>
        <p>${m.bio}</p>
        <div class="social-row">
          <a href="#" aria-label="LinkedIn placeholder for ${m.name}">LinkedIn</a>
          <a href="mailto:cbss@nyu.edu" aria-label="Email placeholder for ${m.name}">Email</a>
        </div>
      </article>
    `
    )
    .join("");

  observeReveal();
}

qsa("[data-team-filter]").forEach((btn) => {
  btn.addEventListener("click", () => {
    qsa("[data-team-filter]").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeTeam = btn.dataset.teamFilter;
    renderTeam();
  });
});

// -----------------------------
// Stories carousel
// -----------------------------
const storyCard = qs("#storyCard");
const storyPrev = qs("#storyPrev");
const storyNext = qs("#storyNext");
let storyIndex = 0;

function renderStory() {
  const s = STORIES[storyIndex];
  storyCard.innerHTML = `
    <h3>${s.name}</h3>
    <p class="section-kicker">${s.role}</p>
    <p>${s.body}</p>
    <p class="story-company">${s.impact}</p>
  `;
}

storyPrev?.addEventListener("click", () => {
  storyIndex = (storyIndex - 1 + STORIES.length) % STORIES.length;
  renderStory();
});

storyNext?.addEventListener("click", () => {
  storyIndex = (storyIndex + 1) % STORIES.length;
  renderStory();
});

// -----------------------------
// Forms (event signup, contact, newsletter)
// -----------------------------
const eventSignupForm = qs("#eventSignupForm");
const eventSignupMessage = qs("#eventSignupMessage");
const contactForm = qs("#contactForm");
const contactMessage = qs("#contactMessage");
const newsletterForm = qs("#newsletterForm");
const newsletterMessage = qs("#newsletterMessage");
const roleSelect = qs("#role");
const conditionalField = qs("#conditionalField");

roleSelect?.addEventListener("change", () => {
  conditionalField.hidden = roleSelect.value !== "partner";
});

function validateRequired(form) {
  const fields = [...form.querySelectorAll("[required]")];
  for (const field of fields) {
    if (!field.value.trim()) {
      field.focus();
      return `${field.previousElementSibling?.textContent || "Field"} is required.`;
    }
    if (field.type === "email" && !validateEmail(field.value.trim())) {
      field.focus();
      return "Please enter a valid email address.";
    }
  }
  return "";
}

eventSignupForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const error = validateRequired(eventSignupForm);

  if (error) {
    setMessage(eventSignupMessage, error, "error");
    return;
  }

  setMessage(eventSignupMessage, "Saved! Placeholder signup recorded successfully.", "success");
  eventSignupForm.reset();
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const error = validateRequired(contactForm);

  if (error) {
    setMessage(contactMessage, error, "error");
    return;
  }

  setMessage(contactMessage, "Thanks! Your message was captured in demo mode.", "success");
  contactForm.reset();
  conditionalField.hidden = true;
});

newsletterForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = qs("#newsletterEmail").value.trim();

  if (!validateEmail(email)) {
    setMessage(newsletterMessage, "Enter a valid email to subscribe.", "error");
    return;
  }

  setMessage(newsletterMessage, "Subscribed! Placeholder newsletter signup complete.", "success");
  newsletterForm.reset();
});

// -----------------------------
// Reveal-on-scroll animation
// -----------------------------
let revealObserver;

function observeReveal() {
  if (!("IntersectionObserver" in window)) return;

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
  }

  qsa(".reveal").forEach((node) => revealObserver.observe(node));
}

// -----------------------------
// Boot
// -----------------------------
renderCases();
renderEvents();
renderTeam();
renderStory();
updateCountdown();
qs("#year").textContent = new Date().getFullYear();
