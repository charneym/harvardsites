# Convert a one-page site to the full multi-page format (client-approved 2026-11-19)
RETIRED for new work (client: home-only builds are the fast format, see HOME_BRIEF.md). Pilot: firelight (live; recipe below). The client dislikes the one-page format ("everything down to even the styling of buttons, text size... just worse"). Convert to the multi-page format at the level of tonka-bay / rock-hill / holleway / serata, keeping the same URL and all verified content.

## Rules
- PRINCIPLES CU–DF, especially DC (hero is a real thing, never abstract geometry), DD (recognisable in one second, no logo-frame or symbolic mash-ups), DE (boxed corners: no pills, no rounded cards/buttons), DF (footer wordmark legible).
- Re-judge the hero honestly: if it is abstract, a logo turned into an object, a medallion/knot/cube/pyramid/mosaic, a sparse map or a "what is that" concept, replace it with a natural, beautiful scene tied to the firm (place, landscape, building, vessel, tree). Keep it if it already reads in one second as a beautiful real subject.
- Invent nothing. Reuse the dossier (_kit/dossiers/<slug>.md) and the old source.
- Keep the firm's language for non-English sites.

## Recipe (from the firelight pilot)
1. Copy a tonka-bay-style src whose regions are marked /*<R:name>*/ (root, fonts, meta, brand, logocss, pre, navmenu, site, content, views, field, story, scenecss, xc, seen). Write a small Python assemble script that reads tonka-bay.src.html (or firelight.src.html, which is already converted), swaps each region from scratch files (content.js, views.js, field.js, story.js), and makes string replacements (colours, fonts, preloader mark path/length, PK + sessionStorage key, theme CSS). Rebuild with one command after every edit; never hand-edit the big file.
2. content.js: lift arrays from the old one-page script (portfolio, team bios, news, criteria) into ACTIVE[name,desc,cat,place,url], P(slug,...) sheets, NEWS{d,s,t,u}.
3. views.js: vHome (hero, manifesto + stats, pinned story, light section, portfolio, team, news, CTA), vApproach, vCriteria, vPortfolio, vTeam (bio sheets at #/team/<slug>), vNews, vContact via head({k,h,p}).
4. Hero field.js with the same interface (start, stop, once, intro, setDim, snapDim, setScroll, focus) and geo() for desktop and phone (34svh band). Check at 1440 and 390 each iteration.
5. Gates as one sequential background script: smoke, navtest (absolute path), reveal/anim/clip on all routes at 1440 + 390, clip --bios, overlay, masthead, mixed, polish, loader, unstyled, cramped/hoverpad (slug), split, balance, logo, hero-audit, title fit, prepush-check after git pull --rebase. One fresh critic. Push.
6. Report "SITE DONE: <slug> (converted)" to the coordinator with: hero kept/replaced (what it is now), pages, gates, effort. Then stop.
