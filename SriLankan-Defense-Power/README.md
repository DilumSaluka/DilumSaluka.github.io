# Sri Lankan Defense Power | ශ්‍රී ලාංකික ආරක්ෂක බලය

A comprehensive public reference website cataloguing Sri Lanka's defence establishment — the **Sri Lanka Army, Navy, Air Force, Police** (including the Special Task Force), **Ministry of Defence** agencies, and intelligence bodies.

> **Live Demo:** https://dilumsaluka.github.io/SriLankan-Defense-Power/
> **Portfolio:** https://dilumsaluka.github.io/

## Overview

This is a **public-record reference** — all data is sourced from official force websites (`defence.lk`, `army.lk`, `navy.lk`, `airforce.lk`, `police.lk`), Wikipedia, defence press, and published budgets. Not a classified or operational resource. Built as a modern, responsive single-page site with detailed modals for every unit, commander, vehicle, weapon, aircraft and base.

### Features

- **4 Armed Branches + Ministry + Intel + Support** — Army (25+ regiments, 749 vehicles), Navy (271 vessels, 7 area commands), Air Force (160+ aircraft, 13 squadrons), Police (STF, CID, TID, etc.), MOD agencies (Coast Guard, CSD, NCC, KDU, ...), Intelligence (SIS, DMI, CNI, LRRP)
- **Interactive Data** — click any unit → role, tasking, uniform, flag/crest; click any commander → bio + rank insignia; click any weapon/vehicle → photo, origin, history and *the same photo* as the card (no mismatch); click any base → Google Maps
- **Overview Matrices** — second tab in every branch (`OVERVIEW`) — a sortable, fixed-layout matrix of Category / Units / Divisions / Vehicles / Weapons / Bases with proper spacing on all four sides
- **Photo System** — every item has one `photo { url, credit, caption }` object referenced everywhere; fallback to the unit's own crest/flag from `logos/` — never a broken image
- **UX Polish** — lightbox zoom (drag + wheel + 2×), scroll-lock counter (`lockScroll`/`unlockScroll`) so the page never gets stuck after zoom, animated stat counters, reveal-on-scroll, glassmorphism, particle field and aurora washes, scroll-to-top arrow

## Tech Stack

- **HTML5** single-file UI (`index.html` + `commanders.js` + `weapons.js` + `logos/` + `img/`)
- **Tailwind CSS** via CDN (custom `military` / `navy` / `afblue` / `police` / `mod` palettes)
- **Vanilla JavaScript** — no framework, no build step required
- **Wikimedia Commons** for correctly-licensed commander/equipment photos via `Special:Redirect`
- **Graphify** knowledge graph in `graphify-out/` for codebase navigation

## Structure

- `index.html` — the whole UI (hero, Ministry, 4 branches, Elite Units, Intelligence Agencies, Signals & EW, Technology, Uniforms & Flags, Ranks, Decorations)
- `commanders.js` — all commanders by branch + rank badge map
- `weapons.js` — all equipment (`WEAPONS`) + `openWeaponModal` / `closeWeaponModal` (with click-through photo reuse)
- `logos/` — 13 regiment/unit crest SVGs
- `img/` / `img/army/` — commander photos
- `graphify-out/` — code graph (run `graphify update .` after code changes)

## Intelligence Agencies (as documented in `PROJECT_BRIEF.md` §4.2)

- **SIS** — State Intelligence Service (1984, ex-NIB), civilian internal+external, under MOD, Director → SecDef, traditionally a Police officer (broken 2019 by a DMI officer)
- **DMI** — Directorate of Military Intelligence (Army), LRRP under it, very likely same lineage as the Army's Military Intelligence Corps
- **CNI** — Chief of National Intelligence, coordinating/advisory, *lower confidence — keep caveat visible*
- **TID** — cross-listed from Police (hybrid)

And **EOD as a capability tag** (§4.3) — Army Engineers (EOD Sqn, 14 CBRN), Navy Diving & Salvage, STF bomb-disposal — tagged, not duplicated as “Army EOD” units.

## Getting Started

No build step:

```bash
# just open
start index.html
# or serve
npx serve .
```

After editing code:

```bash
graphify update .   # keep the knowledge graph current (AST-only, no API cost)
```

## Sources (cite from these first)

`defence.lk`, `navy.lk`, `army.lk`, `stf.lk`, `en.wikipedia.org`, `onlanka.com`, `slguardian.org`, `thediplomat.com`, `globalsecurity.org`, `publicfinance.lk`, `camopedia.org`, `crwflags.com` / `fotw.info`.

> Budget (2026): **Rs. 530bn** (379bn recurrent + 151bn capital) — official. 2025 is disputed (Wikipedia 404bn vs press 442bn) — check the Budget Speech. Police/Public Security (~$540M) is a **separate ministry**, not part of Defence. Coast Guard is *affiliated with* but not *under the command of* the Navy. STF/Police sit under **Ministry of Public Security**, not Defence. “Strategy 2030 and Beyond” — maritime domain awareness, drones, radar, EW; Army shrinking toward ~100k by 2030.

## Uniform / Camo Notes

Olive green was standard until 1983. STF first camo was British DPM (SAS-trained, 1983). Commando Regiment first Army camo was US M81 woodland. Army five-colour “blotch” went service-wide May 2010 (piloted by Commandos). Navy digital (black/brown/grass-green on khaki-tan) — SBS 2009, whole Navy 2010. Air Force woodland-blue with eagle motif.

## Copyright & Use

Compiled from **public records, not for operational use** — see the footer disclaimer on the live site. Per-entry `sources` citations + a blanket footer line are both present.

> **Copyright (c) 2026 Dilum Saluka. All rights reserved.**  
> The design, code, text and media selection for this site are the author's. The underlying facts are public domain; the presentation is not. Contact for permission: **dilumsaluka965@gmail.com**.

## Contributor

- **Dilum Saluka** — BSc Ethical Hacking & Network Security (NIBM / Coventry University), Sri Lanka — `dilumsaluka965@gmail.com` — [GitHub @DilumSaluka](https://github.com/DilumSaluka) — [LinkedIn](https://www.linkedin.com/in/dilum-saluka-641a71384/)

## License

**All rights reserved** — no unauthorized copy/fork/redistribution without written permission (see root `README.md`). Facts are public; the compilation and presentation are not.
