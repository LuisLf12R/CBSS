// ============================================
// CBSS @ NYU SPS - Site Interactivity
// ============================================

const programs = [
  {
    title: "Fireside Chat with Roger Park: AI Innovation in Consulting",
    category: "consulting",
    summary:
      "A CBSS speaker event focused on how AI is transforming consulting, with moderated discussion and student Q&A.",
    date: "April 22, 2026",
    url: "https://engage.nyu.edu/event/12406373",
    cta: "Event Page"
  },
  {
    title: "Apexon x NYU SPS Talent Challenge: Final Presentations & Awards",
    category: "partnerships",
    summary:
      "The culminating CBSS session for the Apexon x NYU SPS Talent Challenge, featuring final student presentations and awards.",
    date: "May 1, 2026",
    url: "https://engage.nyu.edu/event/12420535",
    cta: "Event Page"
  },
  {
    title: "CBSS x M&T: Pop-Up Partnerships Showcase",
    category: "partnerships",
    summary:
      "A partnership showcase where graduate student consultants present project work and connect with industry and faculty attendees.",
    date: "April 30, 2026",
    url: "https://engage.nyu.edu/event/12413925",
    cta: "Event Page"
  },
  {
    title: "Virtual Book Donation Drive",
    category: "community",
    summary:
      "A cross-organization community initiative led with other NYU SPS groups to support Reach Out and Read through a virtual book drive.",
    date: "April 13–30, 2026",
    url: "https://engage.nyu.edu/event/12385911",
    cta: "Event Page"
  },
  {
    title: "NYU Engage Organization Hub",
    category: "digital",
    summary:
      "The official NYU Engage organization page where students can find CBSS information, presence, and event access.",
    date: "Live",
    url: "https://engage.nyu.edu/organization/cbss",
    cta: "Visit"
  },
  {
    title: "CBSS Linktree",
    category: "digital",
    summary:
      "A single public hub for CBSS links, social channels, and organization touchpoints.",
    date: "Live",
    url: "https://linktr.ee/sps.cbss?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnTeo1a8HYmlj4HX17Z87xFNwCb3_djKQd03e_X0oXa2iYTqewK5O_t943Liw_aem_x_YIpsxtmFN2k-beH6b-0w",
    cta: "Visit"
  }
];

const events = [
  {
    title: "Virtual Book Donation Drive",
    description:
      "SCRIBE, IC, MAPS, SAGA, SHRM, and CBSS partnered on a virtual drive supporting Reach Out and Read.",
    startDate: "2026-04-13T00:00:00-04:00",
    endDate: "2026-04-30T23:45:00-04:00",
    dateLabel: "April 13–30, 2026",
    location: "Online",
    url: "https://engage.nyu.edu/event/12385911",
    cta: "Donate Now",
    badgeMonth: "APR",
    badgeDay: "13"
  },
  {
    title: "Fireside Chat with Roger Park: AI Innovation in Consulting",
    description:
      "A fireside conversation on how AI is transforming the consulting industry, followed by student Q&A.",
    startDate: "2026-04-22T17:00:00-04:00",
    endDate: "2026-04-22T18:30:00-04:00",
    dateLabel: "April 22, 2026 • 5:00–6:30 PM",
    location: "NYU SPS Building, Room 332",
    url: "https://engage.nyu.edu/event/12406373",
    cta: "RSVP",
    badgeMonth: "APR",
    badgeDay: "22"
  },
  {
    title: "CBSS x M&T: Pop-Up Partnerships Showcase",
    description:
      "A showcase for student consulting work, partnership-building, and applied learning with small businesses and nonprofits.",
    startDate: "2026-04-30T15:00:00-04:00",
    endDate: "2026-04-30T19:00:00-04:00",
    dateLabel: "April 30, 2026 • 3:00–7:00 PM",
    location: "NYU SPS Building, Room 321",
    url: "https://engage.nyu.edu/event/12413925",
    cta: "RSVP",
    badgeMonth: "APR",
    badgeDay: "30"
  },
  {
    title: "Apexon x NYU SPS Talent Challenge: Final Presentations & Awards",
    description:
      "The final session of the Apexon x NYU SPS Talent Challenge, where participating teams present final work and top performers are recognized.",
    startDate: "2026-05-01T14:00:00-04:00",
    endDate: "2026-05-01T16:00:00-04:00",
    dateLabel: "May 1, 2026 • 2:00–4:00 PM",
    location: "NYU SPS Building, Room 329",
    url: "https://engage.nyu.edu/event/12420535",
    cta: "RSVP",
    badgeMonth: "MAY",
    badgeDay: "1"
  }
];

const channels = [
  {
    name: "NYU Engage",
    role: "Official Organization Hub",
    bio: "Find the public CBSS organization page, event presence, and campus-facing information.",
    url: "https://engage.nyu.edu/organization/cbss",
    cta: "Visit",
    initials: "NE"
  },
  {
    name: "Instagram",
    role: "Social Updates",
    bio: "Follow CBSS on Instagram for student-facing updates, promotion, and ongoing visibility.",
    url: "https://www.instagram.com/nyu.sps.cbss/",
    cta: "Open",
    initials: "IG"
  },
  {
    name: "LinkedIn",
    role: "Professional Presence",
    bio: "Explore the public CBSS LinkedIn page and professional-facing organization profile.",
    url: "https://www.linkedin.com/company/consulting-and-business-strategy-society/",
    cta: "Visit",
    initials: "LI"
  },
  {
    name: "LinkedIn People",
    role: "Member Network",
    bio: "Browse the LinkedIn people view tied to the public CBSS page.",
    url: "https://www.linkedin.com/company/consulting-and-business-strategy-society/people/",
    cta: "View",
    initials: "LP"
  },
  {
    name: "Linktree",
    role: "Quick Access Links",
    bio: "Use the CBSS link hub for a compact entry point into public channels and current links.",
    url: "https://linktr.ee/sps.cbss?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnTeo1a8HYmlj4HX17Z87xFNwCb3_djKQd03e_X0oXa2iYTqewK5O_t943Liw_aem_x_YIpsxtmFN2k-beH6b-0w",
    cta: "Open",
    initials: "LT"
  },
  {
    name: "Email",
    role: "Direct Contact",
    bio: "Reach CBSS directly for questions, collaboration, or student interest.",
    url: "mailto:sps.cbss@nyu.edu",
    cta: "Email",
    initials: "EM"
  }
];

const casesGrid = document.getElementById("casesGrid");
const eventsGrid = document.getElementById("eventsGrid");
const teamGrid = document.getElementById("teamGrid");
const featuredEventContainer = document.getElementById("featuredEvent");

function getFeaturedEvent() {
  const now = new Date();
  return [...events]
    .map((event) => {
      const start = new Date(event.startDate);
      const end = new Date(event.endDate);
      const isOngoing = now >= start && now <= end;
      const score = isOngoing ? 0 : start >= now ? start - now : Number.POSITIVE_INFINITY;
      return { ...event, score };
    })
    .sort((a, b) => a.score - b.score)[0];
}

const featuredEvent = getFeaturedEvent();

function renderPrograms(filter = "all") {
  const filtered =
    filter === "all" ? programs : programs.filter((item) => item.category === filter);

  casesGrid.innerHTML = filtered
    .map(
      (item) => `
      <article class="card">
        <p class="case-meta">${item.category.toUpperCase()} • ${item.date}</p>
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
        <a class="btn btn-small" href="${item.url}" target="_blank" rel="noreferrer">${item.cta}</a>
      </article>
    `
    )
    .join("");
}

function renderFeaturedEvent() {
  featuredEventContainer.innerHTML = `
    <div class="date-badge">
      <span>${featuredEvent.badgeMonth}</span>
      <strong>${featuredEvent.badgeDay}</strong>
    </div>
    <div>
      <p class="featured-label">Featured now</p>
      <h3>${featuredEvent.title}</h3>
      <p>${featuredEvent.description}</p>
      <p class="case-meta">${featuredEvent.dateLabel} • ${featuredEvent.location}</p>
      <a class="btn btn-small" href="${featuredEvent.url}" target="_blank" rel="noreferrer">${featuredEvent.cta}</a>
    </div>
  `;
}

function renderEvents() {
  const remainingEvents = events.filter((item) => item.title !== featuredEvent.title);

  eventsGrid.innerHTML = remainingEvents
    .map(
      (item) => `
      <article class="card">
        <p class="case-meta">${item.dateLabel}</p>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <p class="case-meta">${item.location}</p>
        <a class="btn btn-small" href="${item.url}" target="_blank" rel="noreferrer">${item.cta}</a>
      </article>
    `
    )
    .join("");
}

function renderChannels() {
  teamGrid.innerHTML = channels
    .map(
      (channel) => `
      <article class="card">
        <span class="avatar" aria-hidden="true">${channel.initials}</span>
        <h3>${channel.name}</h3>
        <p class="case-meta">${channel.role}</p>
        <p>${channel.bio}</p>
        <a class="btn btn-small" href="${channel.url}" target="_blank" rel="noreferrer">${channel.cta}</a>
      </article>
    `
    )
    .join("");
}

renderPrograms();
renderFeaturedEvent();
renderEvents();
renderChannels();

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

document.querySelectorAll(".filter-chip").forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelectorAll(".filter-chip")
      .forEach((chip) => chip.classList.remove("active"));
    button.classList.add("active");
    renderPrograms(button.dataset.filter);
  });
});

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
  alert("Demo submission received. Connect this form to your inbox later.");
  contactForm.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();
