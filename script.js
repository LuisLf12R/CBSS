// ============================================
// CBSS @ NYU - Starter Interactivity
// ============================================

// Sample data buckets (replace later with real content)
const cases = [
  {
    title: "Case Study Placeholder #01",
    category: "consulting",
    summary: "Placeholder summary for a consulting-style business challenge.",
    date: "March 2026"
  },
  {
    title: "Case Study Placeholder #02",
    category: "finance",
    summary: "Placeholder summary focused on market sizing and financial analysis.",
    date: "February 2026"
  },
  {
    title: "Case Study Placeholder #03",
    category: "marketing",
    summary: "Placeholder summary around growth strategy and go-to-market planning.",
    date: "January 2026"
  },
  {
    title: "Case Study Placeholder #04",
    category: "tech",
    summary: "Placeholder summary for product strategy and technology decisions.",
    date: "December 2025"
  },
  {
    title: "Case Study Placeholder #05",
    category: "consulting",
    summary: "Placeholder summary for operations and turnaround recommendations.",
    date: "November 2025"
  },
  {
    title: "Case Study Placeholder #06",
    category: "finance",
    summary: "Placeholder summary for valuation and investment committee memo.",
    date: "October 2025"
  }
];

const events = [
  {
    date: "May 5, 2026",
    title: "Case Interview Foundations",
    description: "Placeholder workshop for structured problem-solving basics."
  },
  {
    date: "May 15, 2026",
    title: "Industry Mentor Roundtable",
    description: "Placeholder networking session with alumni and professionals."
  },
  {
    date: "May 22, 2026",
    title: "Spring Case Competition",
    description: "Placeholder team-based competition with final presentations."
  }
];

const team = [
  { name: "Member Name", role: "President", bio: "Placeholder executive bio." },
  { name: "Member Name", role: "Vice President", bio: "Placeholder executive bio." },
  { name: "Member Name", role: "Director of Cases", bio: "Placeholder executive bio." },
  { name: "Member Name", role: "Director of Events", bio: "Placeholder executive bio." },
  { name: "Member Name", role: "Director of Partnerships", bio: "Placeholder executive bio." },
  { name: "Member Name", role: "Director of Marketing", bio: "Placeholder executive bio." },
  { name: "Member Name", role: "Analyst", bio: "Placeholder member bio." },
  { name: "Member Name", role: "Analyst", bio: "Placeholder member bio." }
];

// ============================================
// Render functions
// ============================================
const casesGrid = document.getElementById("casesGrid");
const eventsGrid = document.getElementById("eventsGrid");
const teamGrid = document.getElementById("teamGrid");

function renderCases(filter = "all") {
  const filtered = filter === "all" ? cases : cases.filter((item) => item.category === filter);

  casesGrid.innerHTML = filtered
    .map(
      (item) => `
      <article class="card">
        <p class="case-meta">${item.category.toUpperCase()} • ${item.date}</p>
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
        <a class="btn btn-small" href="#contact">Learn More</a>
      </article>
    `
    )
    .join("");
}

function renderEvents() {
  eventsGrid.innerHTML = events
    .map(
      (item) => `
      <article class="card">
        <p class="case-meta">${item.date}</p>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <a class="btn btn-small" href="#contact">Sign Up</a>
      </article>
    `
    )
    .join("");
}

function renderTeam() {
  teamGrid.innerHTML = team
    .map(
      (member) => `
      <article class="card">
        <span class="avatar" aria-hidden="true"></span>
        <h3>${member.name}</h3>
        <p class="case-meta">${member.role}</p>
        <p>${member.bio}</p>
      </article>
    `
    )
    .join("");
}

renderCases();
renderEvents();
renderTeam();

// ============================================
// Mobile menu toggle
// ============================================
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// ============================================
// Case filters
// ============================================
document.querySelectorAll(".filter-chip").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-chip").forEach((chip) => chip.classList.remove("active"));
    button.classList.add("active");
    renderCases(button.dataset.filter);
  });
});

// ============================================
// Contact form validation (demo mode)
// ============================================
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    formMessage.textContent = "Please complete all fields before submitting.";
    return;
  }

  if (!emailPattern.test(email)) {
    formMessage.textContent = "Please enter a valid email address.";
    return;
  }

  formMessage.textContent = "Success! Your demo message was submitted.";
  alert("Demo submission received. Add Formspree endpoint to enable real submissions.");
  contactForm.reset();
});

// ============================================
// Footer year
// ============================================
document.getElementById("year").textContent = new Date().getFullYear();
