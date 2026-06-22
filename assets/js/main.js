const root = document.documentElement;
const themeStorageKey = "gk-ribeiro-theme";
const themeMeta = document.querySelector('meta[name="theme-color"]');

function getStoredTheme() {
  try {
    return window.localStorage.getItem(themeStorageKey);
  } catch {
    return null;
  }
}

function setStoredTheme(theme) {
  try {
    window.localStorage.setItem(themeStorageKey, theme);
  } catch {
    // Prefer a working toggle even when storage is blocked.
  }
}

function getPreferredTheme() {
  const storedTheme = getStoredTheme();
  if (storedTheme === "dark" || storedTheme === "light") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
  root.dataset.theme = theme;
  if (themeMeta) {
    themeMeta.setAttribute("content", theme === "dark" ? "#0a181b" : "#083f43");
  }

  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    const nextTheme = theme === "dark" ? "claro" : "escuro";
    button.setAttribute("aria-label", `Ativar modo ${nextTheme}`);
    button.setAttribute("title", `Ativar modo ${nextTheme}`);
  });
}

applyTheme(getPreferredTheme());

const headerActions = document.querySelector(".header-actions");
if (headerActions) {
  const themeToggle = document.createElement("button");
  themeToggle.className = "theme-toggle";
  themeToggle.type = "button";
  themeToggle.dataset.themeToggle = "";
  themeToggle.innerHTML = `
    <svg class="icon-moon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 13.8A8.6 8.6 0 0 1 10.2 3a7 7 0 1 0 10.8 10.8Z"></path>
    </svg>
    <svg class="icon-sun" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M12 2v2"></path>
      <path d="M12 20v2"></path>
      <path d="m4.9 4.9 1.4 1.4"></path>
      <path d="m17.7 17.7 1.4 1.4"></path>
      <path d="M2 12h2"></path>
      <path d="M20 12h2"></path>
      <path d="m6.3 17.7-1.4 1.4"></path>
      <path d="m19.1 4.9-1.4 1.4"></path>
    </svg>
  `;

  const navToggle = headerActions.querySelector("[data-nav-toggle]");
  headerActions.insertBefore(themeToggle, navToggle);
  applyTheme(root.dataset.theme);

  themeToggle.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    setStoredTheme(nextTheme);
    applyTheme(nextTheme);
  });
}

const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-site-nav]");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

function trackWhatsAppClick(link) {
  if (typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", "click_whatsapp", {
    event_category: "contato",
    event_label: link.href,
    link_url: link.href,
    link_text: link.textContent.trim() || link.getAttribute("aria-label") || "WhatsApp",
    page_location: window.location.href,
    transport_type: "beacon"
  });
}

function handleWhatsAppInteraction(event) {
  if (!(event.target instanceof Element)) {
    return;
  }

  const link = event.target.closest('a[href*="wa.me/5511957314252"]');
  if (!link || event.defaultPrevented) {
    return;
  }

  const now = Date.now();
  const lastTrackedAt = Number(link.dataset.whatsappTrackedAt || 0);
  if (now - lastTrackedAt < 1200) {
    return;
  }

  link.dataset.whatsappTrackedAt = String(now);
  trackWhatsAppClick(link);
}

document.addEventListener("pointerdown", handleWhatsAppInteraction, { capture: true });
document.addEventListener("click", handleWhatsAppInteraction, { capture: true });

const year = document.querySelector("[data-year]");
if (year) {
  year.textContent = String(new Date().getFullYear());
}
