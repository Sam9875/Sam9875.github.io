import { mountScene } from "./engine.js?v=20260911e";
import {
  PROFILE,
  education,
  experience,
  languages,
  projects,
  skillGroups,
} from "./data.js";

const CATS = ["All", "Labs", "RecSys", "LLM", "Vision", "NLP", "Systems", "Industry", "Course"];
const ICON = {
  gh: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3.5-.4 7-1.6 7-7.2 0-1.6-.6-2.8-1.6-3.8.1-.4.7-1.9-.2-3.8 0 0-1.3-.4-4.2 1.6A14 14 0 0 0 12 4a14 14 0 0 0-3.8.4C5.3 2.4 4 2.8 4 2.8c-.9 1.9-.3 3.4-.2 3.8-1 1-1.6 2.2-1.6 3.8 0 5.6 3.5 6.8 7 7.2a4.8 4.8 0 0 0-1 3.2v4"/><path d="M9 18c-4.5 1.5-4.5-2.5-6-3"/></svg>',
  mail: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  phone: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.4 2.1L8 9.9a16 16 0 0 0 6 6l1.4-1.3a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2.1z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  in: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
};

let sceneDispose = null;
let filter = "All";

function esc(s) {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/"/g, "&quot;");
}

function labs() {
  return projects.filter((p) => p.lab);
}
function publicCount() {
  return projects.filter((p) => p.repo && !p.private).length;
}

function header() {
  return `<header class="nav"><div class="wrap nav-inner">
    <a class="brand" href="#/">
      <span class="mark">SS</span>
      <span class="brand-name">${esc(PROFILE.name)}</span>
    </a>
    <nav class="nav-links">
      <a class="mobile" href="#work">Work</a>
      <a href="#labs">Labs</a>
      <a href="#work">Work</a>
      <a href="#experience">Experience</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
      <a class="btn btn-outline btn-sm" href="Samesun_Singh_CV_EN.pdf" download>CV</a>
    </nav>
  </div></header>`;
}

function footer() {
  return `<footer><div class="wrap foot">
    <p>${esc(PROFILE.name)} · ${esc(PROFILE.location)}</p>
    <p>Every public GitHub repo, rewritten — plus the closed one, named only.</p>
  </div></footer>`;
}

function card(p) {
  const gh = p.github
    ? `<a href="${esc(p.github)}" target="_blank" rel="noopener">GitHub</a>`
    : p.private
      ? `<span class="muted">Private repo</span>`
      : p.paper
        ? `<a href="${esc(p.paper)}" target="_blank" rel="noopener">Paper</a>`
        : "";
  return `<article class="card">
    <div class="card-meta"><span>${esc(p.category)}</span><span>${p.private ? "Private · " : ""}${esc(p.year)}</span></div>
    <h3><a href="#/work/${esc(p.slug)}">${esc(p.title)}</a></h3>
    <p class="blurb">${esc(p.blurb)}</p>
    <p class="delta"><span class="lbl">New · </span>${esc(p.whatsNew[0] || "")}</p>
    <div class="tags">${(p.tags || []).slice(0, 3).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
    <div class="card-links">
      <a class="arch" href="#/work/${esc(p.slug)}">Architecture</a>
      ${gh}
    </div>
  </article>`;
}

function home() {
  const vis = visible();
  const labList = labs();
  return `<main>
    <section class="hero wrap">
      <div class="hero-grid">
        <div>
          <p class="kicker">Available for data / AI roles · ${esc(PROFILE.location)}</p>
          <h1>Work that still ranks when the data is sparse.</h1>
          <p class="lede">${esc(PROFILE.name)} — ${esc(PROFILE.role)} at ${esc(PROFILE.school)}. Cold-start news ranking, a 7,800-call fairness audit, and ten original labs on the modern DS/AI stack.</p>
          <div class="actions">
            <a class="btn btn-primary" href="#labs">Orbit the labs</a>
            <a class="btn btn-outline" href="${esc(PROFILE.github)}" target="_blank" rel="noopener">${ICON.gh} GitHub</a>
            <a class="btn btn-ghost" href="Samesun_Singh_CV_EN.pdf" download>Download CV</a>
          </div>
        </div>
        <div class="scene" data-kind="constellation">
          <div class="scene-host"></div>
          <p class="scene-cap">Drag to orbit · click a node</p>
        </div>
      </div>
      <dl class="stats">
        <div class="stat"><dt>Public GitHub repos</dt><dd>${publicCount()}</dd></div>
        <div class="stat"><dt>DS/AI labs</dt><dd>${labList.length}</dd></div>
        <div class="stat"><dt>LLM audit calls</dt><dd>7,800</dd></div>
        <div class="stat"><dt>Stellantis logs</dt><dd>1M+</dd></div>
      </dl>
    </section>

    <section id="about" class="section"><div class="wrap section-grid">
      <div><h2>About</h2><p class="muted mt-3">Italian and English. Messy data on purpose.</p></div>
      <div>
        <p>${esc(PROFILE.summary)}</p>
        <div class="skills mt-8">${skillGroups.map((g) => `<div><p class="kicker">${esc(g.group)}</p><p class="muted mt-2">${esc(g.items.join(" · "))}</p></div>`).join("")}</div>
        <p class="kicker mt-8">Languages</p>
        <p class="muted mt-2">${languages.map((l) => `${esc(l.name)} ${esc(l.level)}`).join(" · ")}</p>
      </div>
    </div></section>

    <section id="experience" class="section"><div class="wrap section-grid">
      <div><h2>Experience</h2><p class="muted mt-3">Industry labs, then a product thesis.</p></div>
      <div>
        ${experience.map((job) => `<article class="job">
          <p class="muted" style="font-family:var(--font-mono);font-size:0.75rem">${esc(job.dates)} · ${esc(job.place)}</p>
          <h3 class="mt-2">${esc(job.role)} <span class="muted">· ${esc(job.org)}</span></h3>
          <ul>${job.points.map((pt) => `<li>${esc(pt)}</li>`).join("")}</ul>
          <a class="link-primary" href="#/work/${esc(job.slug)}">Open project</a>
        </article>`).join("")}
        <h3>Education</h3>
        <ul style="list-style:none;padding:0;margin:1rem 0 0">
          ${education.map((ed) => `<li style="margin-bottom:1rem"><p style="font-weight:500">${esc(ed.title)}</p><p class="muted" style="font-size:0.875rem">${esc(ed.place)} · ${esc(ed.dates)} · ${esc(ed.note)}</p></li>`).join("")}
        </ul>
      </div>
    </div></section>

    <section id="labs" class="section"><div class="wrap">
      <p class="kicker">Ten DS / AI labs</p>
      <h2 class="mt-2">Stacks, rebuilt with my data.</h2>
      <p class="muted mt-3" style="max-width:36rem">LangGraph, RAG, Promptfoo, Unsloth, MCP, Gemini, Qdrant, OpenHands, Made-With-ML, Microsoft Recommenders — each is an original public repo on my GitHub, not a silent fork. Architecture plus a 3D model on every page.</p>
      <div class="labs-list">${labList.map((lab) => `<a class="lab-row" href="#/work/${esc(lab.slug)}"><span><h3>${esc(lab.title)}</h3><p>${esc(lab.tags.join(" · "))}</p></span></a>`).join("")}</div>
    </div></section>

    <section id="work" class="section"><div class="wrap">
      <h2>All work</h2>
      <p class="muted mt-3" style="max-width:36rem">Original research, industrial ML, and the ten labs. Every card has a 2026 delta, an architecture view, and a 3D scene.</p>
      <p class="muted mt-2" style="font-family:var(--font-mono);font-size:0.75rem">${projects.length} entries in the catalog</p>
      <div class="filters mt-8" id="filters">${CATS.map((c) => {
        const n = c === "All" ? projects.length : c === "Labs" ? labs().length : projects.filter((p) => p.category === c).length;
        return `<button type="button" class="filter${c === filter ? " active" : ""}" data-cat="${c}">${c}<span class="n">${n}</span></button>`;
      }).join("")}</div>
      <div class="grid" id="cards">${vis.map(card).join("")}</div>
    </div></section>

    <section id="contact" class="section"><div class="wrap">
      <h2>Contact</h2>
      <p class="muted mt-3" style="max-width:28rem">Torino. Open to data science, ML engineering, and applied LLM roles.</p>
      <div class="contact-list">
        <a href="mailto:${esc(PROFILE.email)}">${ICON.mail}${esc(PROFILE.email)}</a>
        <a href="tel:${esc(PROFILE.phone.replace(/\s/g, ""))}">${ICON.phone}${esc(PROFILE.phone)}</a>
        <a href="https://maps.google.com/?q=${encodeURIComponent(PROFILE.address)}" target="_blank" rel="noopener">${ICON.pin}${esc(PROFILE.address)}</a>
        <a href="${esc(PROFILE.linkedin)}" target="_blank" rel="noopener">${ICON.in}LinkedIn</a>
        <a href="${esc(PROFILE.github)}" target="_blank" rel="noopener">${ICON.gh}GitHub</a>
      </div>
    </div></section>
  </main>`;
}

function visible() {
  if (filter === "All") return projects;
  if (filter === "Labs") return labs();
  return projects.filter((p) => p.category === filter);
}

function projectPage(slug) {
  const p = projects.find((x) => x.slug === slug);
  if (!p) {
    return `<main class="detail wrap"><h1>Project not found</h1><p class="muted mt-3">That slug is not in the catalog.</p><a class="btn btn-primary mt-8" href="#/">Back to work</a></main>`;
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
    <a class="back" href="#work">All work</a>
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
      <div class="arch-box"><div class="arch-rail" aria-hidden="true"><span class="arch-token"></span></div><div class="arch">${p.arch.map((s, i) => `<div class="arch-step"><div class="n">${String(i + 1).padStart(2, "0")}</div><div class="t">${esc(s.title)}</div><div class="s">${esc(s.sub)}</div></div>`).join("")}</div></div>
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
  try {
    sceneDispose = mountScene(host, {
      kind,
      nodes,
      reducedMotion: reduced,
      onSelect: (slug) => {
        location.hash = `#/work/${slug}`;
      },
    });
  } catch (err) {
    console.error(err);
  }
}

function route() {
  const hash = location.hash || "";
  const work = hash.match(/^#\/work\/([^/?]+)/);
  const root = document.getElementById("root");
  if (work) {
    root.innerHTML = header() + projectPage(decodeURIComponent(work[1])) + footer();
    bindScenes();
    window.scrollTo(0, 0);
    return;
  }
  root.innerHTML = header() + home() + footer();
  bindScenes();
  const filters = document.getElementById("filters");
  filters?.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-cat]");
    if (!btn) return;
    filter = btn.getAttribute("data-cat");
    document.getElementById("cards").innerHTML = visible().map(card).join("");
    filters.querySelectorAll(".filter").forEach((el) => {
      el.classList.toggle("active", el.getAttribute("data-cat") === filter);
    });
  });
  const section = hash.replace(/^#/, "");
  if (section && !section.startsWith("/")) {
    document.getElementById(section)?.scrollIntoView();
  }
}

window.addEventListener("hashchange", route);
route();
