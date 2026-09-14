import {
  PROFILE,
  education,
  experience,
  languages,
  projects,
  skillGroups,
} from "./data.js";

const ICON = {
  gh: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3.5-.4 7-1.6 7-7.2 0-1.6-.6-2.8-1.6-3.8.1-.4.7-1.9-.2-3.8 0 0-1.3-.4-4.2 1.6A14 14 0 0 0 12 4a14 14 0 0 0-3.8.4C5.3 2.4 4 2.8 4 2.8c-.9 1.9-.3 3.4-.2 3.8-1 1-1.6 2.2-1.6 3.8 0 5.6 3.5 6.8 7 7.2a4.8 4.8 0 0 0-1 3.2v4"/><path d="M9 18c-4.5 1.5-4.5-2.5-6-3"/></svg>',
  mail: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  phone: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.4 2.1L8 9.9a16 16 0 0 0 6 6l1.4-1.3a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2.1z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  in: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
};

let sceneDispose = null;
let mapHandle = null;
let currentArea = "origin";

function esc(s) {
  const amp = String.fromCharCode(38);
  return String(s ?? "")
    .replace(/&/g, amp + "amp;")
    .replace(/</g, amp + "lt;")
    .replace(/"/g, amp + "quot;");
}

function labs() {
  return projects.filter((p) => p.lab);
}

function header() {
  return `<header class="nav"><div class="wrap nav-inner">
    <a class="brand" href="#/">
      <span class="mark">SS</span>
      <span class="brand-name">${esc(PROFILE.name)}</span>
    </a>
    <nav class="nav-links">
      <a class="mobile" href="#/">‹ Map</a>
      <a href="#/">‹ Map</a>
      <a class="btn btn-outline btn-sm" href="Samesun_Singh_CV_EN.pdf" download>CV</a>
    </nav>
  </div></header>`;
}

function footer() {
  return `<footer><div class="wrap foot">
    <p>${esc(PROFILE.name)} · ${esc(PROFILE.location)}</p>
    <p>A living map of every public GitHub repo — plus the closed one, named only.</p>
  </div></footer>`;
}

function archHtml(p) {
  return `<div class="arch-box"><div class="arch-rail" aria-hidden="true"><span class="arch-token"></span></div><div class="arch">${p.arch.map((s, i) => `<div class="arch-step"><div class="n">${String(i + 1).padStart(2, "0")}</div><div class="t">${esc(s.title)}</div><div class="s">${esc(s.sub)}</div></div>`).join("")}</div></div>`;
}

function home() {
  return `<div class="map-stage">
    <div id="map-host" class="map-host"></div>
    <p class="map-loading" id="map-loading">drawing the map…</p>
    <header class="map-hud">
      <div class="map-id">
        <p class="kicker">${esc(PROFILE.name)}</p>
        <p class="here">you are here · <span id="map-area">Origin</span></p>
        <h1 id="map-copy">Building systems<br>that <em>learn in production.</em></h1>
      </div>
      <nav>
        <button type="button" class="hud-btn" id="btn-map">Map</button>
        <a class="hud-btn" href="Samesun_Singh_CV_EN.pdf" download>CV</a>
      </nav>
    </header>
    <p class="map-hint" id="map-hint">Click a ring to zoom in</p>
    <button type="button" class="map-back" id="btn-back" hidden>‹ Back to map</button>
    <aside class="map-sheet" id="map-sheet" hidden></aside>
  </div>`;
}

function sheetChrome(title, body) {
  return `<div class="sheet-bar"><p class="kicker">${esc(title)}</p><button type="button" class="icon-x" id="sheet-close" aria-label="Close">×</button></div><div class="sheet-body">${body}</div>`;
}

function originBody() {
  return `<h2>Building systems that <em>learn in production.</em></h2>
    <p class="muted mt-4">${esc(PROFILE.summary)}</p>
    <div class="skills mt-8">${skillGroups.map((g) => `<div><p class="kicker">${esc(g.group)}</p><p class="muted mt-2">${esc(g.items.join(" · "))}</p></div>`).join("")}</div>
    <p class="muted mt-8">${languages.map((l) => `${esc(l.name)} ${esc(l.level)}`).join(" · ")}</p>`;
}

function experienceBody() {
  return experience.map((job) => `<article class="mt-8">
      <p class="muted" style="font-family:var(--font-mono);font-size:0.75rem">${esc(job.dates)} · ${esc(job.place)}</p>
      <h3 class="mt-2">${esc(job.role)} <span class="muted">· ${esc(job.org)}</span></h3>
      <ul class="muted mt-3">${job.points.map((pt) => `<li>${esc(pt)}</li>`).join("")}</ul>
      <a class="btn-link" href="#/work/${esc(job.slug)}">Open project</a>
    </article>`).join("") +
    `<div class="mt-8"><h3>Education</h3><ul class="mt-4">${education.map((ed) => `<li class="mt-4"><p style="font-weight:500">${esc(ed.title)}</p><p class="muted">${esc(ed.place)} · ${esc(ed.dates)} · ${esc(ed.note)}</p></li>`).join("")}</ul></div>`;
}

function contactBody() {
  return `<ul class="contact-list">
    <li><a href="mailto:${esc(PROFILE.email)}">${ICON.mail}${esc(PROFILE.email)}</a></li>
    <li><a href="tel:${esc(PROFILE.phone.replace(/\s/g, ""))}">${ICON.phone}${esc(PROFILE.phone)}</a></li>
    <li><a href="https://maps.google.com/?q=${encodeURIComponent(PROFILE.address)}" target="_blank" rel="noopener">${ICON.pin}${esc(PROFILE.address)}</a></li>
    <li><a href="${esc(PROFILE.linkedin)}" target="_blank" rel="noopener">${ICON.in}LinkedIn</a></li>
    <li><a href="${esc(PROFILE.github)}" target="_blank" rel="noopener">${ICON.gh}GitHub</a></li>
  </ul>`;
}

function sitemapBody() {
  const labList = labs();
  const featured = projects.filter((p) => p.featured && !p.lab);
  return `<p class="muted">estás aquí — a living map of the work.</p>
    <ul class="sitemap">
      <li><button type="button" class="map-go" data-area="origin">Origin${currentArea === "origin" ? ' <span class="here-tag">you are here</span>' : ""}</button></li>
      <li><button type="button" class="map-go" data-area="labs">Labs${currentArea === "labs" ? ' <span class="here-tag">you are here</span>' : ""}</button>
        <ul>${labList.map((p) => `<li><button type="button" class="map-proj" data-slug="${esc(p.slug)}">${esc(p.title)}</button></li>`).join("")}</ul>
      </li>
      <li><button type="button" class="map-go" data-area="work">Work${currentArea === "work" ? ' <span class="here-tag">you are here</span>' : ""}</button>
        <ul>${featured.map((p) => `<li><button type="button" class="map-proj" data-slug="${esc(p.slug)}">${esc(p.title)}</button></li>`).join("")}</ul>
      </li>
      <li><button type="button" class="map-go" data-area="experience">Experience${currentArea === "experience" ? ' <span class="here-tag">you are here</span>' : ""}</button></li>
      <li><button type="button" class="map-go" data-area="contact">Contact${currentArea === "contact" ? ' <span class="here-tag">you are here</span>' : ""}</button></li>
    </ul>`;
}

function previewBody(p) {
  const gh = p.github
    ? `<a class="btn btn-primary" href="${esc(p.github)}" target="_blank" rel="noopener">${ICON.gh} GitHub</a>`
    : "";
  return `<h2>${esc(p.title)}</h2>
    <p class="muted mt-3">${esc(p.blurb)}</p>
    <div class="mt-5">${archHtml(p)}</div>
    <div class="tags mt-5">${(p.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
    <div class="actions mt-5">${gh}<a class="btn btn-outline" href="#/work/${esc(p.slug)}">Open project</a></div>`;
}

function closeSheet() {
  const sheet = document.getElementById("map-sheet");
  if (sheet) {
    sheet.hidden = true;
    sheet.innerHTML = "";
  }
}

function openSheet(title, body) {
  const sheet = document.getElementById("map-sheet");
  if (!sheet) return;
  sheet.hidden = false;
  sheet.innerHTML = sheetChrome(title, body);
  document.getElementById("sheet-close")?.addEventListener("click", closeSheet);
  sheet.querySelectorAll(".map-go").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-area");
      closeSheet();
      mapHandle?.flyToArea(id);
      if (id === "origin") openSheet("Origin", originBody());
      if (id === "experience") openSheet("Experience", experienceBody());
      if (id === "contact") openSheet("Contact", contactBody());
    });
  });
  sheet.querySelectorAll(".map-proj").forEach((btn) => {
    btn.addEventListener("click", () => {
      const slug = btn.getAttribute("data-slug");
      const p = projects.find((x) => x.slug === slug);
      if (p) openSheet(p.lab ? "Lab · " + p.category : p.category, previewBody(p));
    });
  });
}

function setAreaLabel(id) {
  currentArea = id;
  const names = { origin: "Origin", labs: "Labs", work: "Work", experience: "Experience", contact: "Contact" };
  const copies = {
    origin: "Building systems<br>that <em>learn in production.</em>",
    labs: "LangGraph, RAG, evals, LoRA, MCP — rebuilt with my data.",
    work: "Cold-start ranking, a 7,800-call audit, egocentric vision.",
    experience: "Column news, Stellantis, Molinette.",
    contact: "Open to data and AI roles.",
  };
  const areaEl = document.getElementById("map-area");
  const copyEl = document.getElementById("map-copy");
  const back = document.getElementById("btn-back");
  if (areaEl) areaEl.textContent = names[id] || id;
  if (copyEl) {
    if (id === "origin") copyEl.innerHTML = copies.origin;
    else {
      copyEl.className = "map-copy-sub";
      copyEl.textContent = copies[id] || "";
    }
    if (id === "origin") copyEl.className = "";
  }
  if (back) back.hidden = id === "origin";
}

function bindMap() {
  if (mapHandle) {
    mapHandle.dispose();
    mapHandle = null;
  }
  const host = document.getElementById("map-host");
  if (!host) return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.body.style.overflow = "hidden";
  document.getElementById("btn-map")?.addEventListener("click", () => openSheet("Site map", sitemapBody()));
  document.getElementById("btn-back")?.addEventListener("click", () => {
    closeSheet();
    mapHandle?.reset();
  });
  import("./living-map.js?v=20260914g")
    .then((mod) => {
      if (!document.getElementById("map-host")) return;
      mapHandle = mod.mountLivingMap(host, {
        reducedMotion: reduced,
        onAreaChange: setAreaLabel,
        onHover: (pick) => {
          const hint = document.getElementById("map-hint");
          if (!hint) return;
          hint.textContent = pick?.type === "node" ? pick.label : pick?.type === "area" ? pick.id : "Click a ring to zoom in";
        },
        onPick: (pick) => {
          if (pick.type === "area") {
            if (pick.id === "origin") openSheet("Origin", originBody());
            else if (pick.id === "experience") openSheet("Experience", experienceBody());
            else if (pick.id === "contact") openSheet("Contact", contactBody());
            else closeSheet();
            return;
          }
          if (pick.kind === "contact" && pick.href) {
            if (pick.href.startsWith("/")) {
              const a = document.createElement("a");
              a.href = pick.href.replace(/^\//, "");
              a.download = "";
              a.click();
            } else {
              window.open(pick.href, pick.href.startsWith("mailto:") ? "_self" : "_blank", "noopener");
            }
            openSheet("Contact", contactBody());
            return;
          }
          if (pick.kind === "edu") {
            openSheet("Experience", experienceBody());
            return;
          }
          if (pick.slug) {
            const p = projects.find((x) => x.slug === pick.slug);
            if (p) openSheet(p.lab ? "Lab · " + p.category : p.category, previewBody(p));
          }
        },
      });
      document.getElementById("map-loading")?.remove();
    })
    .catch((err) => {
      console.error(err);
      const load = document.getElementById("map-loading");
      if (load) load.textContent = "Map failed to load — use Map for the index.";
    });
}

function projectPage(slug) {
  const p = projects.find((x) => x.slug === slug);
  if (!p) {
    return `<main class="detail wrap"><h1>Project not found</h1><p class="muted mt-3">That slug is not in the catalog.</p><a class="btn btn-primary mt-8" href="#/">‹ Back to map</a></main>`;
  }
  const related = projects.filter((x) => x.category === p.category && x.slug !== p.slug).slice(0, 3);
  const gh = p.github
    ? `<a class="btn btn-primary" href="${esc(p.github)}" target="_blank" rel="noopener">${ICON.gh} Open GitHub</a>`
    : p.private
      ? `<button class="btn btn-outline" disabled>Private repository</button>`
      : "";
  const up = p.upstream
    ? `<a class="btn btn-outline" href="${esc(p.upstream)}" target="_blank" rel="noopener">Upstream study</a>`
    : "";
  const paper = p.paper
    ? `<a class="btn btn-outline" href="${esc(p.paper)}" target="_blank" rel="noopener">ResearchGate</a>`
    : "";
  return `<main class="detail wrap">
    <a class="back" href="#/">‹ Back to map</a>
    <div class="detail-grid">
      <div>
        <p class="kicker">${p.lab ? "Lab · " : ""}${esc(p.category)}${p.language ? " · " + esc(p.language) : ""} · ${esc(p.year)}${p.private ? " · Private" : ""}</p>
        <h1>${esc(p.title)}</h1>
        <p class="lede">${esc(p.blurb)}</p>
        <div class="actions">${gh}${up}${paper}</div>
        <div class="tags">${(p.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
      </div>
      <div class="scene detail" data-kind="${esc(p.scene)}">
        <div class="scene-host"></div>
        <p class="scene-cap">Drag to orbit the architecture</p>
      </div>
    </div>
    <section class="mt-8">
      <h2>Story</h2>
      <p class="muted mt-4" style="max-width:36rem">${esc(p.story)}</p>
      <p class="muted mt-4" style="font-family:var(--font-mono);font-size:0.75rem">${esc(p.stack)}</p>
    </section>
    <section class="mt-8">
      <h2>Architecture</h2>
      <p class="muted mt-2" style="font-size:0.875rem">Pipeline as shipped — a packet moving through each stage.</p>
      ${archHtml(p)}
    </section>
    <section class="split">
      <div>
        <h2>What changed</h2>
        <p class="muted mt-2" style="font-size:0.875rem">A little new on every project — not a leftover README.</p>
        <div class="mt-5">${p.whatsNew.map((x) => `<p class="note mt-3">${esc(x)}</p>`).join("")}</div>
      </div>
      <div>
        <h2>Next</h2>
        <p class="muted mt-2" style="font-size:0.875rem">Honest follow-ups, not a fake roadmap.</p>
        <div class="mt-5">${p.next.map((x) => `<p class="note quiet mt-3">${esc(x)}</p>`).join("")}</div>
      </div>
    </section>
    ${related.length ? `<section class="related"><h2>Same slice</h2><ul>${related.map((r) => `<li><a href="#/work/${esc(r.slug)}"><span class="muted" style="font-family:var(--font-mono);font-size:0.75rem">${esc(r.year)}</span><span style="margin-top:0.25rem;font-weight:500">${esc(r.title)}</span></a></li>`).join("")}</ul></section>` : ""}
  </main>`;
}

function bindScenes() {
  if (sceneDispose) {
    sceneDispose();
    sceneDispose = null;
  }
  const box = document.querySelector(".scene");
  const host = box?.querySelector(".scene-host");
  if (!box || !host) return;
  const kind = box.getAttribute("data-kind") || "constellation";
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const nodes = labs().map((p) => ({ slug: p.slug, title: p.title, kind: p.scene }));
  import("./engine.js?v=20260914g")
    .then((mod) => {
      sceneDispose = mod.mountScene(host, {
        kind,
        nodes,
        reducedMotion: reduced,
        onSelect: (slug) => {
          location.hash = `#/work/${slug}`;
        },
      });
    })
    .catch((err) => console.error(err));
}

function route() {
  const hash = location.hash || "";
  const work = hash.match(/^#\/work\/([^/?]+)/);
  const root = document.getElementById("root");
  if (mapHandle) {
    mapHandle.dispose();
    mapHandle = null;
  }
  document.body.style.overflow = "";
  if (work) {
    root.innerHTML = header() + projectPage(decodeURIComponent(work[1])) + footer();
    bindScenes();
    window.scrollTo(0, 0);
    return;
  }
  root.innerHTML = home();
  bindMap();
}

window.addEventListener("hashchange", route);
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeSheet();
    mapHandle?.reset();
  }
});
route();
